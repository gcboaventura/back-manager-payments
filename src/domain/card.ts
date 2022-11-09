import { CustomerModel } from './customer'

export interface Card {
	customer_id: string
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

export interface CardModel extends Card {
	id: string
	first_six_digits: string
	last_four_digits: string
	status: string
	created_at: string
	updated_at: string
	customer: CustomerModel
	type: string
}

export interface Address {
	id?: string
	country: string
	state: string
	city: string
	zip_code: string
	line_1: string
	line_2: string
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
	status: string
	created_at: string
	updated_at: string
	type: string
}

export interface AddCardUseCase {
	add(card: Card): Promise<CardModel>
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
