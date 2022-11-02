import { Card } from './card'
import { ClientEntity } from './client'
import { Currency, Items, PaymentMethods, PlanModel, Status } from './plan'

export interface SignatureEntity {
	code?: string
	plan_id: string
	payment_method: PaymentMethods
	start_at?: Date
	customer: ClientEntity
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
	plan: PlanModel
	items: Items
}

export interface AddSignatureUseCase {
	add(signature: SignatureEntity): Promise<SignatureModel>
}

export interface GetSignatureUseCase {
	get(id: string): Promise<SignatureModel>
}

export interface DeleteSignatureUseCase {
	delete(id: string): Promise<SignatureModel>
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
