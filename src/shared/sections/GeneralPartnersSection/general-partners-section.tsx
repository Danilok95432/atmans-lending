import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Section } from 'src/shared/ui/Section/section'
import { SliderBtns } from 'src/widgets/slider-btns/slider-btns'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { type RefObject, useRef } from 'react'
import { useGetEventByIdQuery } from 'src/features/home/api/home.api'
import { partnersSliderOptions } from './consts'

export const GeneralPartnersSection = () => {
	const { data: eventData } = useGetEventByIdQuery('1')
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	if (!eventData?.partnerGeneralLinks) return ''
	return (
		<Section className={cn(styles.generalPartners)}>
			<Container>
				<h2>Генеральные партнеры</h2>
				<div className={styles.partnerSlider}>
					<Swiper {...partnersSliderOptions} ref={swiperRef}>
						{eventData?.partnerGeneralLinks.map((slideItem, idx) => (
							<SwiperSlide key={idx} className={styles.partnerSlide}>
								<div className={styles.partnerCard} key={slideItem.id}>
									<a href={slideItem.link} className={styles.partnersLink}>
										<img
											src={slideItem.mainphoto[0]?.thumbnail}
											alt='partner'
											width={188}
											height={105}
											loading='lazy'
										/>
									</a>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<SliderBtns className={styles.partnersSliderBtns} swiperRef={swiperRef} />
				</div>
			</Container>
		</Section>
	)
}
