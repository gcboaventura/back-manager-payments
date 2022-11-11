import { AddCardUseCase, CardModel } from '../../../domain'

export interface AddCardGateway extends AddCardUseCase {}

export interface AddCardRepository {
	add(card: CardModel): Promise<CardModel>
}
