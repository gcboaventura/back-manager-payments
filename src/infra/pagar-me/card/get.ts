import { Axios } from 'axios'
import { GetCardGateway } from '../../../data'
import { CardModel } from '../../../domain'

export class GetCardPagarme implements GetCardGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(customer_id: string, card_id: string): Promise<CardModel> {
		const { data } = await this.axios.get(`/customers/${customer_id}/cards/${card_id}`)
		return data
	}
}
