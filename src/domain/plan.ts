import { GatewayResponse } from './gateway'

export interface Plan {
	name: string
	description: string
	shippable?: boolean
	payment_methods: PaymentMethodPlan[]
	installments: number
	minimum_price: number
	statement_descriptor: string
	currency: 'BRL'
	interval: Interval
	interval_count: number
	trial_period_days: number
	billing_type: BillingType
	billing_days?: number
	items: Items[]
}

export interface PlanModel extends Plan {
	id: string
	created_at: string
	updated_at: string
	deleted_at: string
	status: string
}

export type PaymentMethodPlan =
	| 'credit_card'
	| 'boleto'
	| 'voucher'
	| 'bank_transfer'
	| 'safety_pay'
	| 'checkout'
	| 'cash'
	| 'pix'

export type Interval = 'day' | 'week' | 'month' | 'year'

export type BillingType = 'prepaid' | 'postpaid' | 'exact_day'

export interface Items {
	name: string
	quantity: string
	description: string
	pricing_scheme: PricingScheme
}

export interface PricingScheme {
	scheme_type: SchemeType
	price: number
}

export type SchemeType = 'unit' | 'package' | 'volume' | 'tier'

export interface AddPlanUseCase {
	add(plan: Plan): Promise<PlanModel>
}

export interface GetPlanUseCase {
	get(plan_id: string): Promise<PlanModel>
}

export interface UpdatePlanUseCase {
	update(plan: Plan, plan_id: string): Promise<PlanModel>
}

export interface DeletePlanUseCase {
	delete(plan_id: string): Promise<PlanModel>
}

export interface ListPlansUseCase {
	list(query?: QueryPlan): Promise<GatewayResponse<PlanModel[]>>
}

export interface QueryPlan {
	name?: string
	status?: string
	created_since?: string
	created_until?: string
	page?: number
	size?: number
}
