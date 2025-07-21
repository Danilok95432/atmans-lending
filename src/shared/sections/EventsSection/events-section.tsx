import { Section } from 'src/shared/ui/Section/section'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import { MainButton } from 'src/shared/ui/MainButton/MainButton'
import { DownloadIconSVG } from 'src/shared/ui/icons/downloadIconSVG'
import { useBreakPoint } from 'src/features/useBreakPoint/useBreakPoint'
import { DownloadMobileSVG } from 'src/shared/ui/icons/downloadMobileSVG'
import { RegEventGuestModal } from 'src/modals/reg-guest-modal/reg-guest-modal'
import { useActions } from 'src/app/store/hooks/actions'
import { RegEventPartModal } from 'src/modals/reg-part-modal/reg-part-modal'

export const EventsSection = () => {
	const breakpoint = useBreakPoint()
	const { openModal } = useActions()
	return (
		<Section id='events' className={cn(styles.events)}>
			<Container>
				<FlexRow className={styles.eventsSectionRow}>
					<h2>События</h2>
					{breakpoint === 'S' ? null : (
						<MainButton as='route' to={`https://этноспорт.рф/events`}>
							Все события
						</MainButton>
					)}
				</FlexRow>
				<FlexRow className={styles.eventInfoWrapper}>
					<FlexRow className={styles.infoRow}>
						<p className={styles.eventTile}>Традиционные игры «Атмановские кулачки-2025»</p>
						<p className={styles.eventDesc}>
							Атмановские кулачки — титульные русские игры, на которых проходят годовые соревнования
							по видам русского этноспорта (русская стенка, кила, борьба за-вороток, рюхи, лапта,
							стрельба из лука по бабкам), состязания гармонистов, плясунов и частушечников, а также
							работают площадки исконных забав. Ядром праздника как и раньше является кулачный бой
							стенка-на-стенку.
						</p>
						{breakpoint === 'S' && (
							<div className={styles.mobileLinksEvent}>
								<div className={styles.linkEl}>
									<span>Правила и условия участия (pdf, 3,2 Мб)</span>
									<DownloadMobileSVG />
								</div>
								<div className={styles.linkEl}>
									<span>Регламент (pdf, 3,2 Мб)</span>
									<DownloadMobileSVG />
								</div>
							</div>
						)}
						<a href='#' className={styles.linkEvent}>
							<span>Положение о проведении Атмановских Кулачек 2025 года</span>
							<DownloadIconSVG />
						</a>
						<FlexRow className={styles.regLinks}>
							<MainButton onClick={() => openModal(<RegEventGuestModal id={'1'} />)}>
								Регистрация гостей
							</MainButton>
							<MainButton onClick={() => openModal(<RegEventPartModal id={'1'} />)}>
								Регистрация участников
							</MainButton>
						</FlexRow>
					</FlexRow>
					<div className={styles.imgWrapper}>
						<img src='src/assets/img/traditionJPG.jpg' alt='#' />
					</div>
				</FlexRow>
			</Container>
		</Section>
	)
}
