import { Axios } from 'axios'
import { LoadCustomerByEmailGateway } from '../../../data'
import { CustomerModel, GatewayResponse } from '../../../domain'

export class LoadCustomerByEmailPagarme implements LoadCustomerByEmailGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(email: string): Promise<GatewayResponse<CustomerModel>> {
		const { data } = await this.axios.get(`/customers?email=${email}`)
		return data
	}
}
