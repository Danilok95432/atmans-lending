/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/naming-convention */
import { useFormContext, useFieldArray, useWatch } from 'react-hook-form'
import styles from './index.module.scss'
import { type FC, useEffect } from 'react'
import { FormInput } from 'src/widgets/FormInput/form-input'

type GuestFieldsProps = {
	disabled?: boolean
}

export const GuestFields: FC<GuestFieldsProps> = ({ disabled = false }) => {
	const { control, setValue } = useFormContext()
	const { fields } = useFieldArray({
		name: 'group_list',
		control,
	})

	const count_ts = useWatch({ control, name: 'group_count' })

	useEffect(() => {
		const targetCount = parseInt(count_ts || '1', 10)
		const currentCount = fields.length

		if (targetCount === currentCount) return

		if (targetCount > currentCount) {
			const fieldNames = ['age', 'surname', 'firstname', 'fathname']
			fieldNames.forEach((field) => {
				const currentValues = control._formValues.guest_list?.[field] || []
				const newValues = [...currentValues, ...Array(targetCount - currentCount).fill('')]
				setValue(`guest_list.${field}`, newValues)
			})
		} else {
			const fieldNames = ['age', 'surname', 'firstname', 'fathname']
			fieldNames.forEach((field) => {
				const currentValues = control._formValues.guest_list?.[field] || []
				const newValues = currentValues.slice(0, targetCount)
				setValue(`group_list.${field}`, newValues)
			})
		}
	}, [count_ts, control, setValue])

	const displayCount = Math.max(parseInt(count_ts || '1', 10), 1)

	return (
		<>
			{Array.from({ length: displayCount }).map((_, index) => (
				<div key={`guest-${index}`} className={styles.guestsWrapper}>
					<div className={styles.firstGroupInfo}>
						<FormInput
							name={`group_list[${index}].age`}
							label='Возраст'
							className={styles.shortInput}
							disabled={disabled}
						/>
						<FormInput name={`group_list[${index}].surname`} label='Фамилия' disabled={disabled} />
					</div>
					<div className={styles.secondGroupInfo}>
						<FormInput name={`group_list[${index}].firstname`} label='Имя' disabled={disabled} />
						<FormInput
							name={`group_list[${index}].fathname`}
							label='Отчество'
							disabled={disabled}
						/>
					</div>
				</div>
			))}
		</>
	)
}
