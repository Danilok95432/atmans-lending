import { type FC, useState } from 'react'
import { type ProgramDay } from 'src/types/program'
import styles from './index.module.scss'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import { ProgramList } from './components/program-list/program-list'
import { ProgramNav } from './components/program-nav/program-nav'

type EventProgramProps = {
	programDays: ProgramDay[] | []
	parentView?: string
}

export const Program: FC<EventProgramProps> = ({ programDays, parentView = 'list' }) => {
	const [activeDayId, setActiveDayId] = useState(0)

	const navDays = programDays.map((day) => ({ id: day.id, date: day.date }))

	const handleChangeActiveDay = (id: number) => {
		setActiveDayId(id)
	}
	const getActiveProgram = () => {
		const currentDay = programDays.find((day) => day.id === activeDayId)
		return currentDay?.programList ?? []
	}

	if (!programDays?.length) return <h4>нет программы</h4>

	return (
		<div>
			<FlexRow className={styles.headProgram}>
				<ProgramNav
					days={navDays}
					activeDayId={activeDayId}
					onChangeActiveDay={handleChangeActiveDay}
				/>
			</FlexRow>
			<ProgramList list={getActiveProgram()} viewMode={'tab'} />
		</div>
	)
}
