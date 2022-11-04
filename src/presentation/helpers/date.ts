import { DateValidator } from '../protocols'
import moment from 'moment'

export class Date implements DateValidator {
	diff(firstDate: globalThis.Date, secondDate: globalThis.Date): number {
		const a = moment(firstDate)
		const b = moment(secondDate)
		const difference = a.diff(b, 'day')
		return difference
	}

	insertDb(date: string): string {
		return moment(date).format('YYYY-MM-DD HH:mm:ss')
	}
}
