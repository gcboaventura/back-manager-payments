import { Card, CardUpdate } from './card'
import { ClientEntity } from './client'
import { BillingType, Currency, Items, PaymentMethods, PlanModel, Status } from './plan'

export interface SignatureEntity {
	code?: string
	plan_id: string
	payment_method: PaymentMethods
	start_at: Date
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

export interface CancelSignatureUseCase {
	cancel(id: string): Promise<SignatureModel>
}

export interface UpdateCardSignatureUseCase {
	update(card: CardUpdate, idSignature: string): Promise<SignatureModel>
}

export interface UpdateStartDateSignatureUseCase {
	update(start_at: Date, idSignature: string): Promise<SignatureModel>
}

export interface ListSignaturesUseCase {
	list(query?: QueryListSignatures): Promise<SignatureModel[]>
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

export interface QueryListSignatures {
	status?: Status
	code?: string
	billing_type?: BillingType
	customer_id?: string
	plan_id?: string
	card_id?: string
	next_billing_since?: Date
	next_billing_until?: Date
	created_since?: string
	created_until?: string
	page?: number
	size?: number
}

export interface SinatureRepositoryEntity {
	id_signature: string
	created_at: string
	updated_at: string
}

export interface SignatureRepositoryModel extends SinatureRepositoryEntity {}

export interface AddSignatureRepositoryUseCase {
	add(data: SinatureRepositoryEntity): Promise<SignatureRepositoryModel>
}
