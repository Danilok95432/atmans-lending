import { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { SlideNextSvg } from 'src/shared/ui/icons/slideNextSVG'

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false)

	// Высота хедера (можете передать как пропс или использовать константу)
	const headerHeight = 80

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > headerHeight) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => window.removeEventListener('scroll', toggleVisibility)
	}, [headerHeight])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button
			className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
			onClick={scrollToTop}
			aria-label='Наверх'
		>
			<SlideNextSvg color='white' />
		</button>
	)
}
