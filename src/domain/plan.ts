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

export interface PlanModel {
	id: string
	created_at: string
	updated_at: string
	deleted_at: string
	status: string
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
	items: ItemModelPlan[]
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

export interface AddItemPlanUseCase {
	add(plan_id: string, item: Items): Promise<ResponseHandleItemsPlans>
}

export interface UpdateItemPlanUseCase {
	update(plan_id: string, item_id: string, item: ItemModelPlan): Promise<ResponseHandleItemsPlans>
}

export interface DeleteItemPlanUseCase {
	delete(plan_id: string, item_id: string): Promise<ResponseHandleItemsPlans>
}

export interface QueryPlan {
	name?: string
	status?: string
	created_since?: string
	created_until?: string
	page?: number
	size?: number
}

export interface ItemModelPlan extends Items {
	id: string
	cycles: number
	status: string
	created_at: string
	updated_at: string
	deleted_at: string
}

export interface ResponseHandleItemsPlans extends ItemModelPlan {
	plan: PlanModel
}
