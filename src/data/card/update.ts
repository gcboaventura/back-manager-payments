import { UpdateCardUseCase, Card, CardModel } from '@/domain'
import { UpdateCardGateway, UpdateCardRepository } from '../protocols'

export class UpdateCardData implements UpdateCardUseCase {
	private readonly updateCardGateway: UpdateCardGateway
	private readonly updateCardRepository: UpdateCardRepository

	constructor(updateCardGateway: UpdateCardGateway, updateCardRepository: UpdateCardRepository) {
		this.updateCardGateway = updateCardGateway
		this.updateCardRepository = updateCardRepository
	}

	async update(customer_id: string, card_id: string, card: Card): Promise<CardModel> {
		const updateGateway = await this.updateCardGateway.update(customer_id, card_id, card)

		await this.updateCardRepository.update(updateGateway)

		return updateGateway
	}
}
