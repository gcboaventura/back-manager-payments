import { CardModel, UpdateCardUseCase } from '@/domain'

export interface UpdateCardGateway extends UpdateCardUseCase {}

export interface UpdateCardRepository {
	update(card: CardModel): Promise<CardModel>
}
