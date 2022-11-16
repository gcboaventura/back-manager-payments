import { Axios } from 'axios'
import { AddOrderGateway } from '@/data'
import { Order, OrderModel } from '@/domain'

export class AddOrderPagarme implements AddOrderGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(order: Order): Promise<OrderModel> {
		const { data } = await this.axios.post(`/orders`, order)
		return data
	}
}
