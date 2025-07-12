import { Section } from 'src/shared/ui/Section/section'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'

export const EventsSection = () => {
	return (
		<Section className={cn(styles.events)}>
			<Container>
				<div></div>
			</Container>
		</Section>
	)
}
