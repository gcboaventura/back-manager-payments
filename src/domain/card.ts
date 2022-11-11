import { Address } from './address'
import { CustomerModel } from './customer'

export interface Card {
	number: string
	holder_name: string
	exp_month: number
	exp_year: number
	cvv: string
	holder_document?: string
	brand: string
	label?: string
	billing_address_id?: string
	billing_address: Address
}

export interface CardModel extends Card {
	id: string
	first_six_digits: string
	last_four_digits: string
	status: string
	created_at: string
	updated_at: string
	deleted_at: string
	customer: CustomerModel
	type: TypeCard
}

export interface TokenCard {
	type: string
	card: Card
	appId: string
}

export interface TokenCardModel extends Card {
	id: string
	first_six_digits: string
	last_four_digits: string
	status: Status
	created_at: string
	updated_at: string
	deleted_at: string
	type: TypeCard
}

export type Status = 'active' | 'deleted' | 'expired'

export type TypeCard = 'credit' | 'voucher'

export interface AddCardUseCase {
	add(card: Card, customer_id: string): Promise<CardModel>
}

export interface GetCardUseCase {
	get(customer_id: string, card_id: string): Promise<CardModel>
}

export interface ListCardsUseCase {
	list(customer_id: string): Promise<CardModel[]>
}

export interface UpdateCardUseCase {
	update(card: CardModel): Promise<CardModel>
}

export interface DeleteCardUseCase {
	delete(customer_id: string, card_id: string): Promise<CardModel>
}

export interface RenewCardUseCase {
	renew(customer_id: string, card_id: string): Promise<CardModel>
}

export interface TokenizeCardUseCase {
	tokenize(card: TokenCard): Promise<TokenCardModel>
}
