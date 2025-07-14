import { DisplayBreakpoints } from 'src/shared/helpers/consts'
import { type SwiperProps } from 'swiper/react/swiper-react'

export const partnersSliderOptions: SwiperProps = {
	slidesPerView: 2,
	slidesPerGroup: 1,
	spaceBetween: 17,
	autoHeight: false,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Md]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.ShortLg]: {
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 7,
		},
		[DisplayBreakpoints.Xll]: {
			slidesPerView: 8,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 9,
		},
	},
}
