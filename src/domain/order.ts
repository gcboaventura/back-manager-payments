import { CardModel } from './card'
import { Customer } from './customer'

export interface Order {
	code?: string
	customer?: Customer
	customer_id: string
	items: ItemsOrder[]
	payments: Payments[]
	closed: boolean
}

export interface OrderModel {
	id: string
	code: string
	amount: number
	currency: string
	closed: boolean
	items: ItemsOrderModel[]
	customer: CustomerOrder
	created_at: string
	updated_at: string
	closed_at: string
	status: string
	charges: Charges
}

export interface ItemsOrder {
	amount: number
	description: string
	quantity: number
	code?: string
}

export interface ItemsOrderModel extends ItemsOrder {
	id: string
	created_at: string
	updated_at: string
	status: string
}

export interface CustomerOrder {
	id: string
	name: string
	email: string
	delinquent: boolean
	created_at: string
	updated_at: string
}

export interface Payments {
	payment_method: PaymentMethod
	credit_card: CreditCard
	amount: number
}

export interface Charges {
	id: string
	code: string
	gateway_id: string
	amount: number
	status: string
	currency: string
	payment_method: PaymentMethod
	paid_at: string
	created_at: string
	updated_at: string
	custumer: CustomerOrder
	last_transaction: LastTransaction
}

export interface LastTransaction {
	id: string
	transaction_type: string
	gateway_id: string
	amount: number
	status: string
	success: boolean
	installments: number
	statement_descriptor: string
	acquirer_name: string
	acquirer_affiliation_code: string
	acquirer_tid: string
	acquirer_nsu: string
	acquirer_auth_code: string
	acquirer_message: string
	acquirer_return_code: string
	operation_type: string
	card: CardModel
	created_at: string
	updated_at: string
	gateway_response: GatewayResponseOrder
}

export interface GatewayResponseOrder {
	code: string
}

export type PaymentMethod =
	| 'credit_card'
	| 'boleto'
	| 'voucher'
	| 'bank_transfer'
	| 'safety_pay'
	| 'checkout'
	| 'cash'
	| 'pix'

export interface CreditCard {
	operation_type: OperationType
	card_id: string
	statement_descriptor: string
	installments: number
}

export type OperationType = 'auth_and_capture' | 'auth_only' | 'pre_auth'

export type StatusCloseOrder = 'paid' | 'canceled' | 'falied'

export interface CloseOrder {
	order_id: string
	status: StatusCloseOrder
}

export interface CloseOrderModel {
	id: string
	code: string
	amount: number
	currency: string
	closed: boolean
	items: ItemsOrderModel[]
	customer: CustomerOrder
	created_at: string
	updated_at: string
	closed_at: string
	status: string
}

export interface AddNewCharge {
	order_id: string
	amount: number
	payment: Payments
}

export interface QueryOrders {
	code?: string
	status?: string
	customer_id?: string
	created_since?: string
	created_until?: string
	page?: number
	size?: number
}

export interface AddOrderUseCase {
	add(order: Order): Promise<OrderModel>
}

export interface GetOrderUseCase {
	get(order_id: string): Promise<OrderModel>
}

export interface CloseOrderUseCase {
	close(close: CloseOrder): Promise<CloseOrderModel>
}

export interface AddNewChargeOnOrder {
	add(charge: AddNewCharge): Promise<OrderModel>
}

export interface ListOrdersUseCase {
	list(query?: QueryOrders): Promise<OrderModel[]>
}
