import { Axios } from 'axios'
import { ListCardsGateway } from '../../../data'
import { CardModel } from '../../../domain'

export class ListCardsPagarme implements ListCardsGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(customer_id: string): Promise<CardModel[]> {
		const { data } = await this.axios.get(`/customers/${customer_id}/cards`)

		return data
	}
}
