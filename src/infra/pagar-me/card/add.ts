import { Axios } from 'axios'
import { AddCardGateway } from '@/data'
import { Card, CardModel } from '@/domain'

export class AddCardPagarme implements AddCardGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(card: Card, customer_id: string): Promise<CardModel> {
		const { data } = await this.axios.post(`/customers/${customer_id}/cards`, card)
		return data
	}
}
