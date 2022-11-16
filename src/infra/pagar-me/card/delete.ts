import { Axios } from 'axios'
import { DeleteCardGateway } from '@/data'
import { CardModel } from '@/domain'

export class DeleteCardPagarme implements DeleteCardGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async delete(customer_id: string, card_id: string): Promise<CardModel> {
		const { data } = await this.axios.delete(`/customers/${customer_id}/cards/${card_id}`)
		return data
	}
}
