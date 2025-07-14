import { Container } from 'src/shared/ui/Container/Container'
import { navigationElements } from './consts'
import styles from './index.module.scss'
import { BurgerMenu } from './components/burger-menu/burger-menu'
import { PersonIconSvg } from 'src/shared/ui/icons/personIconSVG'
import { AuthModal } from 'src/modals/auth-modal/auth-modal'
import { useActions } from 'src/app/store/hooks/actions'

export const MainNavigation = () => {
	const { openModal } = useActions()
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}
	return (
		<nav className={styles.navigation}>
			<Container className={styles.navigationCont}>
				<BurgerMenu />
				<ul className={styles.navWrapper}>
					{navigationElements.map((el, index) => {
						return (
							<button key={index} className={styles.navEl} onClick={() => scrollToSection(el.link)}>
								<li key={index}>{el.title}</li>
							</button>
						)
					})}
				</ul>
				<button className={styles.enterLK} onClick={() => openModal(<AuthModal />)}>
					<div className={styles.vector}>
						<PersonIconSvg color='#CC1746' />
					</div>
				</button>
			</Container>
		</nav>
	)
}
