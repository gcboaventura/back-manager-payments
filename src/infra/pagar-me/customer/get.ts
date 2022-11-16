import { Axios } from 'axios'
import { GetCustomerGateway } from '@/data'
import { CustomerModel } from '@/domain'

export class GetCustomerPagarme implements GetCustomerGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(id: string): Promise<CustomerModel> {
		const { data } = await this.axios.get(`/customers/${id}`)
		return data
	}
}
