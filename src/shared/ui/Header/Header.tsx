import { getDaysUntil, getDayWord } from 'src/shared/helpers/utils'
import { Container } from '../Container/Container'
import { FlexRow } from '../FlexRow/FlexRow'
import styles from './index.module.scss'
import { LogoSVG } from '../icons/logoSVG'
import { MainButton } from '../MainButton/MainButton'
import { PersonIconSvg } from '../icons/personIconSVG'
import { FileLinkSVG } from '../icons/fileLinkSVG'
import { useBreakPoint } from 'src/features/useBreakPoint/useBreakPoint'
import { LogoMobileSVG } from '../icons/logoMobileSVG'
import { RegEventPartModal } from 'src/modals/reg-part-modal/reg-part-modal'
import { useActions } from 'src/app/store/hooks/actions'
import { RegEventGuestModal } from 'src/modals/reg-guest-modal/reg-guest-modal'
import { AuthModal } from 'src/modals/auth-modal/auth-modal'

export const Header = () => {
	const { openModal } = useActions()
	const breakpoint = useBreakPoint()
	const daysDiff = getDaysUntil()
	return (
		<header className={styles.header}>
			<Container>
				<FlexRow className={styles.headerRow}>
					{breakpoint === 'S' ? <LogoMobileSVG /> : <LogoSVG />}
					<div className={styles.infoBlock}>
						<p className={styles.dates}>22-24 августа 2025 года</p>
						<p>
							До игр осталось: <span>{daysDiff}</span> {getDayWord(daysDiff)}
						</p>
						<p className={styles.starts}>
							Начало регистрации:
							<br /> 15 июля 2025 года
						</p>
					</div>
					<FlexRow className={styles.controlsRow}>
						<FlexRow>
							<MainButton onClick={() => openModal(<RegEventGuestModal id={'1'} />)}>
								Регистрация гостей
							</MainButton>
							<MainButton onClick={() => openModal(<RegEventPartModal id={'1'} />)}>
								Регистрация участников
							</MainButton>
						</FlexRow>
						<button className={styles.enterLK} onClick={() => openModal(<AuthModal />)}>
							<div className={styles.vector}>
								<PersonIconSvg />
							</div>
							<p>Войти в кабинет</p>
						</button>
						<FlexRow className={styles.linksRow}>
							<a href='#' className={styles.linkEl}>
								<FileLinkSVG />
								<span>Политика защиты и обработки персональных данных</span>
							</a>
							<a href='#' className={styles.linkEl}>
								<FileLinkSVG />
								<span>Правила посещения игр</span>
							</a>
						</FlexRow>
					</FlexRow>
				</FlexRow>
			</Container>
		</header>
	)
}
