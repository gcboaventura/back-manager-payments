import { Address } from './address'

export interface Card {
	number: string
	holder_name: string
	exp_month: number
	exp_year: number
	cvv: string
	holder_document?: string
	brand?: string
	label?: string
	billing_address_id?: string
	billing_address: Address
}

export interface CardUpdate extends Card {
	card_id: string
}
