import { Axios } from 'axios'
import { UpdateCardGateway } from '../../../data'
import { Card, CardModel } from '../../../domain'

export class UpdateCardPagarme implements UpdateCardGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(customer_id: string, card_id: string, card: Card): Promise<CardModel> {
		const { data } = await this.axios.put(`/customers/${customer_id}/cards/${card_id}`, card)
		return data
	}
}
