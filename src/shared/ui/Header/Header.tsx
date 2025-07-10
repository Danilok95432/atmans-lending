import { getDaysUntil } from 'src/shared/helpers/utils'
import { Container } from '../Container/Container'
import { FlexRow } from '../FlexRow/FlexRow'
import styles from './index.module.scss'
import { LogoSVG } from '../icons/logoSVG'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<FlexRow className={styles.headerRow}>
					<LogoSVG />
					<div className={styles.infoBlock}>
						<p className={styles.dates}>22-24 августа 2025 года</p>
						<p>До игр осталось: {getDaysUntil()}</p>
					</div>
				</FlexRow>
			</Container>
		</header>
	)
}
