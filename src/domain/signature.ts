import { ClientModel } from './client'
import { Currency, Items, PaymentMethods, PlanModel, Status } from './plan'

export interface SignatureEntity {
	code?: string
	plan_id: string
	payment_method: PaymentMethods
	start_at?: Date
	customer_id: string
	card: Card
	installments?: number
	discounts?: Discounts[]
	increments?: Increments[]
	gateway_affiliation_id?: string
	boleto_due_days?: number
}

export interface SignatureModel extends SignatureEntity {
	id: string
	current_cycle: CurrentCycle
	next_billing_at: string
	currency: Currency
	statement_descriptor: string
	status: Status
	created_at: string
	updated_at: string
	customer: ClientModel
	plan: PlanModel
	items: Items
}

export interface AddSignatureUseCase {
	add(signature: SignatureEntity): Promise<SignatureModel>
}

export interface Card {
	number: string
	holder_name?: string
	holder_document?: string
	exp_month: number
	exp_year: number
	cvv: string
	brand?: string
	label?: string
	billing_address_id?: string
	billing_address: Address
}

export interface Address {
	line_1: string
	line_2: string
	zip_code: string
	city: string
	state: string
	country: string
}

export interface Discounts {
	cycles: string
	value: string
	discount_type: string
}

export interface Increments {
	cycles: string
	value: string
	increment_type: string
}

export interface CurrentCycle {
	id: string
	start_at: string
	end_at: string
	billing_at: string
}
