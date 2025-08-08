import styles from './index.module.scss'
import { RegEventPartModal } from 'src/modals/reg-part-modal/reg-part-modal'
import { RegEventGuestModal } from 'src/modals/reg-guest-modal/reg-guest-modal'
import { useActions } from 'src/app/store/hooks/actions'
import { useBreakPoint } from 'src/features/useBreakPoint/useBreakPoint'
import { MainButton } from 'src/shared/ui/MainButton/MainButton'
import { FlexRow } from 'src/shared/ui/FlexRow/FlexRow'
import { LogoMobileSVG } from 'src/shared/ui/icons/logoMobileSVG'
import { LogoTerminalSVG } from 'src/shared/ui/icons/LogoTerminalSVG'

export const TerminalPage = () => {
	const { openModal } = useActions()
	const breakPoint = useBreakPoint()
	return (
		<div className={styles.terminal}>
			{breakPoint === 'S' ? <LogoMobileSVG /> : <LogoTerminalSVG />}
			<FlexRow className={styles.buttonsRow}>
				<MainButton
					className={styles.sendBtn}
					onClick={() => openModal(<RegEventGuestModal id={'1'} />)}
				>
					Регистрация гостя
				</MainButton>
				<MainButton
					className={styles.sendBtn}
					onClick={() => openModal(<RegEventPartModal id={'1'} />)}
				>
					Регистрация участников
				</MainButton>
			</FlexRow>
		</div>
	)
}
