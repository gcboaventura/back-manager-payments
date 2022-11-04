export interface DateValidator {
	diff(firstDate: Date, secondDate: Date): number
	insertDb(date: string): string
}
