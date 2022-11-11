import { Axios } from 'axios'
import { UpdateCustomerGateway } from '../../../data'
import { CustomerModel } from '../../../domain'

export class UpdateCustomerPagarme implements UpdateCustomerGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(customer: CustomerModel): Promise<CustomerModel> {
		const { data } = await this.axios.post(
			`/customers/${customer.id}`,
			Object.assign({}, customer, { id: undefined })
		)
		return data
	}
}
