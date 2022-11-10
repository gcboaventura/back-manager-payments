import { Axios } from 'axios'
import { AddCustomerGateway } from '../../../data'
import { Customer, CustomerModel } from '../../../domain'

export class AddCustomerPagarme implements AddCustomerGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(customer: Customer): Promise<CustomerModel> {
		const { data } = await this.axios.post('/customers', customer)
		return data
	}
}
