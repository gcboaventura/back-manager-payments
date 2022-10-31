export interface PlanEntity {
	name: string // Max: 64 characters
	description?: string
	shippable?: boolean
	payment_methods?: PaymentMethods[]
	installments?: number[]
	minimum_price?: number
	statement_descriptor?: string
	currency?: Currency
	interval?: Interval
	interval_count?: number
	trial_period_days?: number
	billing_type: BillingType
	billing_days?: number[] // Required if billing_type equals days
	items: Items[]
}

export type PaymentMethods = 'credit_card' | 'boleto' | 'debit_card'

export type Currency = 'BRL'

export type Interval = 'day' | 'week' | 'month' | 'year'

export type BillingType = 'prepaid' | 'postpaid' | 'exact_day'

export interface Items {
	name?: string
	quantity: string
	description: string
	id?: string
	status?: string
	created_at?: string
	updated_at?: string
	pricing_scheme?: PricingScheme
}

export interface PricingScheme {
	scheme_type: SchemeType
	price?: number
	mininum_price?: number
	price_brackets?: PriceBrackets[]
}

export type SchemeType = 'unit' | 'package' | 'volume ' | 'tier'

export interface PriceBrackets {
	start_quantity?: number
	end_quantity?: number
	overage_price?: number
	price?: number
}

export interface AddPlanUseCase {
	add(plan: PlanEntity): Promise<any>
}
