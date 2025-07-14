import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { Section } from 'src/shared/ui/Section/section'
import { SliderBtns } from 'src/widgets/slider-btns/slider-btns'
import { type RefObject, useEffect, useRef, useState } from 'react'
import { eventsSliderOptions } from './consts'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import skeletonImg from 'src/assets/img/skeleton-img.png'
import { MainButton } from 'src/shared/ui/MainButton/MainButton'
import { RegEventGuestModal } from 'src/modals/reg-guest-modal/reg-guest-modal'
import { RegEventPartModal } from 'src/modals/reg-part-modal/reg-part-modal'
import { useActions } from 'src/app/store/hooks/actions'
// import { useGetEventByIdQuery } from 'src/features/home/api/home.api'

export const MainSliderSection = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	const [isMobile, setIsMobile] = useState(false)
	// const { data: eventData } = useGetEventByIdQuery('1')
	const sliderItems = [
		{
			id: '1',
			title: 'Атмановские кулачки — 2025',
			desc: 'В этом году Атмановские кулачки по традиции состоятся в предпоследние выходные августа. 22 августа — заезд, 23 августа — основной день, 24 августа — разъезд.',
			img: '',
		},
		{
			id: '2',
			title: 'Атмановские кулачки — 2025',
			desc: 'В этом году Атмановские кулачки по традиции состоятся в предпоследние выходные августа. 22 августа — заезд, 23 августа — основной день, 24 августа — разъезд.',
			img: '',
		},
		{
			id: '3',
			title: 'Атмановские кулачки — 2025',
			desc: 'В этом году Атмановские кулачки по традиции состоятся в предпоследние выходные августа. 22 августа — заезд, 23 августа — основной день, 24 августа — разъезд.',
			img: '',
		},
		{
			id: '4',
			title: 'Атмановские кулачки — 2025',
			desc: 'В этом году Атмановские кулачки по традиции состоятся в предпоследние выходные августа. 22 августа — заезд, 23 августа — основной день, 24 августа — разъезд.',
			img: '',
		},
	]
	const { openModal } = useActions()
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1340)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<Section className={cn(styles.mainSlider)}>
			<Container>
				<Swiper {...eventsSliderOptions} ref={swiperRef}>
					{sliderItems.map((slideEl) => {
						return (
							<SwiperSlide key={slideEl.id}>
								<FlexRow className={styles.slideRow}>
									<div className={styles.imgWrapper}>
										{slideEl.img ? (
											<img className={styles.sliderImg} src={slideEl.img} alt='image' />
										) : (
											<img className={styles.skeletonImg} src={skeletonImg} alt='image' />
										)}
									</div>
									<FlexRow className={styles.contentSlide}>
										<p className={styles.slideTitle}>{slideEl.title}</p>
										<p className={styles.slideDesc}>{slideEl.desc}</p>
										<SliderBtns className={styles.eventsSliderBtns} swiperRef={swiperRef} />
									</FlexRow>
								</FlexRow>
							</SwiperSlide>
						)
					})}
				</Swiper>
				{isMobile && (
					<FlexRow className={styles.controlsMobile}>
						<MainButton onClick={() => openModal(<RegEventGuestModal id={'1'} />)}>
							Регистрация гостей
						</MainButton>
						<MainButton onClick={() => openModal(<RegEventPartModal id={'1'} />)}>
							Регистрация участников
						</MainButton>
					</FlexRow>
				)}
			</Container>
		</Section>
	)
}
