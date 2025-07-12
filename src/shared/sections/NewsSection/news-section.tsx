import { useGetEventNewsByIdQuery } from 'src/features/home/api/home.api'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Section } from 'src/shared/ui/Section/section'
import { useBreakPoint } from 'src/features/useBreakPoint/useBreakPoint'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react'
import { type RefObject, useMemo, useRef } from 'react'
import { SliderBtns } from 'src/widgets/slider-btns/slider-btns'
import { newsSliderOptions } from './consts'
import { MainButton } from 'src/shared/ui/MainButton/MainButton'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import { NewsCard } from './components/NewsCard/news-card'
import { type CardNewsItem } from 'src/types/news'

export const NewsSection = () => {
	const { data: newsList } = useGetEventNewsByIdQuery('1')
	const breakpoint = useBreakPoint()
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	const { mainNews, topNews } = useMemo(() => {
		if (!newsList) {
			return { mainNews: null, topNews: [] }
		}

		const sortedNews = [...newsList].sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		)

		let mainNewsItem = sortedNews.find((news) => news.main) ?? null
		if (mainNewsItem) {
			const mainNewsList = sortedNews.filter((news) => news.main)
			mainNewsItem = mainNewsList[0]
		}

		let topNewsItems: CardNewsItem[] = []

		if (mainNewsItem) {
			const filtered = sortedNews.filter((news) => news.id !== mainNewsItem?.id)

			if (breakpoint === 'breakPoint') {
				topNewsItems = filtered.slice(0, 1)
			} else if (breakpoint === 'ShortLg' || breakpoint === 'L') {
				topNewsItems = []
			} else if (breakpoint === 'S') {
				mainNewsItem = null
				topNewsItems = []
			} else {
				topNewsItems = filtered.slice(0, 2)
			}
		} else {
			topNewsItems = sortedNews.slice(0, 5)
		}

		return { mainNews: mainNewsItem, topNews: topNewsItems }
	}, [newsList, breakpoint])

	const sliderNews = useMemo(() => {
		if (!newsList) return []

		const excludedNewsIds: string[] = []

		if (mainNews) {
			excludedNewsIds.push(mainNews.id)
		}
		excludedNewsIds.push(...topNews.map((news) => news.id))

		return newsList.filter((news) => !excludedNewsIds.includes(news.id))
	}, [newsList, mainNews, topNews])
	return (
		<Section className={cn(styles.news)}>
			<Container>
				<FlexRow className={styles.newsSectionRow}>
					<h2>Новости</h2>
					<MainButton as='route' to={''}>
						Все новости
					</MainButton>
				</FlexRow>
				{(breakpoint === 'L' || breakpoint === 'sliderBtnsPoint') && (
					<div className={styles.breakpointNews}>
						{mainNews ? (
							<>
								<div className={styles.mainNews}>
									<NewsCard {...mainNews} mainStatus={true} className={styles.mainNewsCard} />
								</div>
								<div className={styles.topNews}>
									{topNews.map((news) => (
										<NewsCard className={styles.defaultNewsCard} key={news.id} {...news} />
									))}
								</div>
							</>
						) : (
							<div className={styles.topNews}>
								{topNews.map((news) => (
									<NewsCard className={styles.defaultNewsCard} key={news.id} {...news} />
								))}
							</div>
						)}
					</div>
				)}
				{sliderNews?.length > 0 && (
					<div className='slider-with-btns'>
						<Swiper {...newsSliderOptions} ref={swiperRef}>
							{sliderNews.map((newsEl, idx) => (
								<SwiperSlide className={styles.newsSlide} key={idx}>
									<NewsCard key={newsEl.id} {...newsEl} />
								</SwiperSlide>
							))}
						</Swiper>
						<SliderBtns className={styles.newsSliderBtns} swiperRef={swiperRef} />
					</div>
				)}
			</Container>
		</Section>
	)
}
