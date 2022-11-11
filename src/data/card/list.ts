import { ListCardsUseCase, CardModel } from '../../domain'
import { ListCardsGateway } from '../protocols'

export class ListCardsData implements ListCardsUseCase {
	private readonly listCardsGateway: ListCardsGateway

	constructor(listCardsGateway: ListCardsGateway) {
		this.listCardsGateway = listCardsGateway
	}

	async list(customer_id: string): Promise<CardModel[]> {
		const customerList = await this.listCardsGateway.list(customer_id)

		return customerList
	}
}
