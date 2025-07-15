import { MainNavigation } from 'src/widgets/main-navigation/main-navigation'
import { Footer } from '../shared/ui/Footer/Footer'
import { Header } from '../shared/ui/Header/Header'
import { AwardsSection } from 'src/shared/sections/AwardsSection/awards-section'
import { MainSliderSection } from 'src/shared/sections/MainSliderSection/main-slider-section'
import { NewsSection } from 'src/shared/sections/NewsSection/news-section'
import { PartnersSection } from 'src/shared/sections/PartnersSection/partners-section'
import { GeneralPartnersSection } from 'src/shared/sections/GeneralPartnersSection/general-partners-section'
import { OrgsSection } from 'src/shared/sections/OrgsSection/orgs-section'
import { PathwaysSection } from 'src/shared/sections/PathwaysSection/pathways-section'
import { PlacementsSection } from 'src/shared/sections/PlacementsSection/placements-section'
import { FaqSection } from 'src/shared/sections/FaqSection/faq-section'
import { OrgsEventsSection } from 'src/shared/sections/OrgsEventsSection/orgs-events-section'
import { VideosSection } from 'src/shared/sections/VideosSection/videos-section'
import { SubEventsSection } from 'src/shared/sections/SubEventsSection/sub-events-section'
import { ProgramSection } from 'src/shared/sections/ProgramSection/program-section'
import { EventsSection } from 'src/shared/sections/EventsSection/events-section'

export const HomePage = () => {
	return (
		<>
			<Header />
			<MainNavigation />
			<AwardsSection />
			<MainSliderSection />
			<OrgsSection />
			<NewsSection />
			<GeneralPartnersSection />
			<ProgramSection />
			<PartnersSection />
			<EventsSection />
			<SubEventsSection />
			<OrgsEventsSection />
			<VideosSection />
			<PathwaysSection />
			<PlacementsSection />
			<FaqSection />
			<Footer />
		</>
	)
}
