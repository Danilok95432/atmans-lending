import { useGetEventProgramByIdQuery } from 'src/features/home/api/home.api'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Section } from 'src/shared/ui/Section/section'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import { useState } from 'react'
import { MainProgramNav } from 'src/widgets/main-program-navigation/main-program-nav'
import { DefisSVG } from 'src/shared/ui/icons/defisSVG'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { type RefObject, useRef } from 'react'
import { programSliderOptions } from './consts'

export const ProgramSection = () => {
	const { data: programDays } = useGetEventProgramByIdQuery('1')
	const [activeDayId, setActiveDayId] = useState(1)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	const navDays = programDays?.map((day) => ({ id: day.id, date: day.date }))

	const goToDay = (dayId: number) => {
		setActiveDayId(dayId)

		const index = programDays?.findIndex((day) => day.id === dayId) ?? 0

		swiperRef.current?.swiper.slideTo(index, 500)
	}

	const getActiveProgram = () => {
		return programDays?.find((day) => day.id === activeDayId)?.programList ?? []
	}

	return (
		<Section className={cn(styles.program)}>
			<Container>
				<FlexRow className={styles.programWrapper}>
					<FlexRow className={styles.programHeadRow}>
						<h1>Программа</h1>
						<MainProgramNav
							days={navDays ?? [{ id: 1, date: new Date() }]}
							activeDayId={activeDayId}
							changeSlide={goToDay}
						/>
					</FlexRow>
					<FlexRow className={styles.contentRow}>
						<div className={styles.imgWrapper}>
							<img src='src/assets/img/programImg.jpg' alt='' />
						</div>
						<Swiper
							{...programSliderOptions}
							ref={swiperRef}
							initialSlide={programDays?.findIndex((day) => day.id === activeDayId) ?? 1}
							className={styles.programSlider}
							onSlideChange={(swiper) => {
								const currentIndex = swiper.activeIndex
								const currentDayId = programDays?.[currentIndex]?.id
								if (currentDayId !== undefined) {
									setActiveDayId(currentDayId)
								}
							}}
						>
							{programDays?.map((day) => (
								<SwiperSlide key={day.id}>
									<FlexRow className={styles.programList}>
										<h2>
											{day.id === 1
												? 'Основной день игр'
												: day.id === 2
													? 'Последний день игр'
													: 'Первый день игр'}
										</h2>
										{getActiveProgram().map((programEl) => (
											<FlexRow key={programEl.id} className={styles.elRow}>
												<p>{programEl.time}</p>
												<DefisSVG />
												<p>{programEl.title}</p>
											</FlexRow>
										))}
									</FlexRow>
								</SwiperSlide>
							))}
						</Swiper>
					</FlexRow>
				</FlexRow>
			</Container>
		</Section>
	)
}
