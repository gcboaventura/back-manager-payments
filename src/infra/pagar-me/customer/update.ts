import { Axios } from 'axios'
import { UpdateCustomerGateway } from '@/data'
import { CustomerUpdateEntity, CustomerUpdateModel } from '@/domain'

export class UpdateCustomerPagarme implements UpdateCustomerGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(customer: CustomerUpdateEntity, id: string): Promise<CustomerUpdateModel> {
		const { data } = await this.axios.put(
			`/customers/${id}`,
			Object.assign({}, customer, { id: undefined })
		)
		return data
	}
}
