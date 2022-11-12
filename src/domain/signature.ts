import { Card } from './card'
import { Customer, CustomerModel } from './customer'
import { GatewayResponse } from './gateway'
import { PlanModel } from './plan'

export interface Signature {
	plan_id: string
	payment_method: PaymentMethodSignature
	customer_id?: string
	customer: Customer
	card_id?: string
	card: Card
	installments: number
}

export interface SignatureModel {
	id: string
	code: string
	start_at: string
	interval: string
	interval_count: string
	billing_type: string
	current_cycle: {
		id: string
		start_at: string
		end_at: string
		billing_at: string
	}
	next_billing_at: string
	payment_method: string
	currency: string
	statement_descriptor: string
	installments: number
	status: string
	created_at: string
	updated_at: string
	customer: CustomerModel
	plan: PlanModel
	items: ItemsModel[]
}

export type PaymentMethodSignature =
	| 'credit_card'
	| 'boleto'
	| 'voucher'
	| 'bank_transfer'
	| 'safety_pay'
	| 'checkout'
	| 'cash'
	| 'pix'

export interface ItemsModel {
	id: string
	name: string
	quantity: string
	description: string
	created_at: string
	updated_at: string
	pricing_scheme: PricingScheme
}

export interface PricingScheme {
	scheme_type: SchemeType
	price: number
}

export type SchemeType = 'unit' | 'package' | 'volume' | 'tier'

export interface AddSignatureUseCase {
	add(signature: Signature): Promise<SignatureModel>
}

export interface GetSignatureUseCase {
	get(signature_id: string): Promise<SignatureModel[]>
}

export interface ListSignaturesUseCase {
	list(query?: QuerySignatures): Promise<GatewayResponse<SignatureModel[]>>
}

export interface CancelSignatureUseCase {
	cancel(signature_id: string): Promise<SignatureModel>
}

export interface UpdateCreditCardSignatureUseCase {
	update(card: string | Card): Promise<SignatureModel>
}

export interface UpdateItemSignatureUseCase {
	update(subscription_id: string, item_id: string, item: ItemSignature): Promise<SignatureModel>
}

export interface QuerySignatures {
	status?: string
	code?: string
	billing_type?: string
	customer_id?: string
	plan_id?: string
	card_id?: string
	next_billing_since?: string
	next_billing_until?: string
	created_since?: string
	created_until?: string
	page?: number
	size?: number
}

export interface ItemSignature {
	name: string
	quantity: string
	description: string
	pricing_scheme: PricingScheme
}
