export interface DateModel {
	insertDb(date: string): string
	daysInMonth(): number
	currentDay(): number
	daysToEndOfMonth(): number
}
