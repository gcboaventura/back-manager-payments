import { Address } from './address'

export interface Card {
	number: string
	holder_name: string
	holder_document?: string
	exp_month: number
	exp_year: number
	cvv: string
	brand?: string
	label?: string
	billing_address_id?: string
	billing_address: Address
}
