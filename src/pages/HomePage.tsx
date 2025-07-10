import { MainNavigation } from 'src/widgets/main-navigation/main-navigation'
import { Footer } from '../shared/ui/Footer/Footer'
import { Header } from '../shared/ui/Header/Header'
import { AwardsSection } from 'src/shared/sections/AwardsSection/awards-section'

export const HomePage = () => {
	return (
		<>
			<Header />
			<MainNavigation />
			<AwardsSection />
			<Footer />
		</>
	)
}
