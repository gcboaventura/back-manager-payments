import moment from 'moment'
import { DateModel } from './types'

export class DateUtils implements DateModel {
	insertDb(date: string): string {
		return moment(date).format('YYYY-MM-DD HH:mm:ss')
	}

	daysInMonth(): number {
		return moment().daysInMonth()
	}

	currentDay(): number {
		return moment().date()
	}

	daysToEndOfMonth(): number {
		return this.daysInMonth() - this.currentDay()
	}
}
