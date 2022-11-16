import { AddCardUseCase, Card, CardModel } from '@/domain'
import { AddCardGateway, AddCardRepository } from '../protocols'

export class AddCardData implements AddCardUseCase {
	private readonly addCardGateway: AddCardGateway
	private readonly addCardRepository: AddCardRepository

	constructor(addCardGateway: AddCardGateway, addCardRepository: AddCardRepository) {
		this.addCardGateway = addCardGateway
		this.addCardRepository = addCardRepository
	}

	async add(card: Card, customer_id: string): Promise<CardModel> {
		const addGateway = await this.addCardGateway.add(card, customer_id)

		await this.addCardRepository.add(addGateway)

		return addGateway
	}
}
