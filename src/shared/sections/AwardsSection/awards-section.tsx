import { Section } from 'src/shared/ui/Section/section'
import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import cn from 'classnames'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'

export const AwardsSection = () => {
	const awards = [
		{
			id: '1',
			year: '2014',
			award: 'Включены в реестр объектов нематериального культурного наследия народов России',
		},
		{
			id: '2',
			year: '2014',
			award: 'Федерацией этноспорта России объявлены титульными русскими грами',
		},
		{
			id: '3',
			year: '2015',
			award: 'Стали лауреатом премии в области событийного туризма ”Russian Event Awards”',
		},
		{
			id: '4',
			year: '2017',
			award: 'Министерством культуры РФ присвоен статус «Национального события»',
		},
		{
			id: '5',
			year: '2017',
			award: 'Включены в ТОП-200 лучших российских фестивалей и праздников',
		},
		{
			id: '6',
			year: '2018',
			award: 'Заняли первое место в финале национальной премии ”Russian Event Awards”',
		},
		{
			id: '7',
			year: '2020',
			award: 'Внесены в ТОП-500 российских культурных брендов',
		},
	]
	return (
		<Section className={cn(styles.awards)}>
			<Container>
				<FlexRow className={styles.awardsList}>
					{awards.map((el) => {
						return (
							<div className={styles.awardEl} key={el.id}>
								<p>{el.year}</p>
								<p>{el.award}</p>
							</div>
						)
					})}
				</FlexRow>
			</Container>
		</Section>
	)
}
