export interface DateModel {
	insertDb(date: string): string
	daysInMonth(): number
}
