import { useGetEventByIdQuery } from 'src/features/home/api/home.api'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { Section } from 'src/shared/ui/Section/section'
import { HomeFaqArrow } from 'src/shared/ui/icons/homeFaqArrow'
import { AccordionItem } from 'src/widgets/accordion-item/accordion-item'

export const FaqSection = () => {
	const { data: faqEvent } = useGetEventByIdQuery('1')
	return (
		<Section className={cn(styles.faq)}>
			<Container>
				<h2>Часто задаваемые вопросы</h2>
				<div className={styles.homeFaqList}>
					{faqEvent &&
						[...faqEvent?.faq]
							.sort((a, b) => Number(a?.id) - Number(b?.id))
							.map((faqEl) => (
								<AccordionItem
									className={styles.faqItem}
									trigger={faqEl.title}
									customArrow={<HomeFaqArrow />}
									content={faqEl.content}
									key={faqEl.id}
								/>
							))}
				</div>
			</Container>
		</Section>
	)
}
