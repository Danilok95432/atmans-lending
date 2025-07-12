import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { Section } from 'src/shared/ui/Section/section'
import { SliderBtns } from 'src/widgets/slider-btns/slider-btns'
import { type RefObject, useRef } from 'react'
import { eventsSliderOptions } from './consts'
// import { useGetEventByIdQuery } from 'src/features/home/api/home.api'

export const MainSliderSection = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	// const { data: eventData } = useGetEventByIdQuery('1')
	return (
		<Section className={cn(styles.mainSlider)}>
			<Container>
				<Swiper {...eventsSliderOptions} ref={swiperRef}>
					<SwiperSlide key={'1'}>
						<div></div>
					</SwiperSlide>
				</Swiper>
				<SliderBtns className={styles.eventsSliderBtns} swiperRef={swiperRef} />
			</Container>
		</Section>
	)
}
