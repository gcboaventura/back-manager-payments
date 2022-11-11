import { GetCardUseCase, CardModel } from '../../domain'
import { GetCardGateway } from '../protocols'

export class GetCardData implements GetCardUseCase {
	private readonly getCardGateway: GetCardGateway

	constructor(getCardGateway: GetCardGateway) {
		this.getCardGateway = getCardGateway
	}

	async get(customer_id: string, card_id: string): Promise<CardModel> {
		const customer = await this.getCardGateway.get(customer_id, card_id)

		return customer
	}
}
