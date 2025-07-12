import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const getDayWord = (days: number): string => {
	if (days % 10 === 1 && days % 100 !== 11) {
		return 'день'
	} else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
		return 'дня'
	} else {
		return 'дней'
	}
}

export const getDaysUntil = (): number => {
	const today = new Date()
	const targetDate = new Date('2025-08-22')
	const diffInMs = targetDate.getTime() - today.getTime()
	const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
	return diffInDays
}

export const mainFormatDate = (
	date: Date | string | undefined,
	dateFormat = 'dd MMMM yyyy',
): string | null => {
	if (!date) return null
	const formatedDate = typeof date === 'string' ? new Date(date) : date
	return format(formatedDate, dateFormat, { locale: ru })
}
