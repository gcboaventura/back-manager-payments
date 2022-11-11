import { DeleteCardUseCase, CardModel } from '../../domain'
import { DeleteCardGateway, DeleteCardRepository } from '../protocols'

export class DeleteCardData implements DeleteCardUseCase {
	private readonly deleteCardGateway: DeleteCardGateway
	private readonly deleteCardRepository: DeleteCardRepository

	constructor(deleteCardGateway: DeleteCardGateway, deleteCardRepository: DeleteCardRepository) {
		this.deleteCardGateway = deleteCardGateway
		this.deleteCardRepository = deleteCardRepository
	}

	async delete(customer_id: string, card_id: string): Promise<CardModel> {
		const addGateway = await this.deleteCardGateway.delete(customer_id, card_id)

		await this.deleteCardRepository.delete(customer_id, card_id)

		return addGateway
	}
}
