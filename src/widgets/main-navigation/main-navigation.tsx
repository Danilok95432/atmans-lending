import { Container } from 'src/shared/ui/Container/Container'
import { navigationElements } from './consts'
import styles from './index.module.scss'

export const MainNavigation = () => {
	return (
		<nav className={styles.navigation}>
			<Container className={styles.navigationCont}>
				<ul className={styles.navWrapper}>
					{navigationElements.map((el, index) => {
						return (
							<a href={el.link} key={index} className={styles.navEl}>
								<li key={index}>{el.title}</li>
							</a>
						)
					})}
				</ul>
			</Container>
		</nav>
	)
}
