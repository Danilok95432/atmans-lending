import { navigationElements } from './consts'
import styles from './index.module.scss'

export const MainNavigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{navigationElements.map((el, index) => {
					return (
						<a href={el.link} key={index}>
							<li key={index}>{el.title}</li>
						</a>
					)
				})}
			</ul>
		</nav>
	)
}
