import { Axios } from 'axios'
import { ListCustomersGateway } from '../../../data'
import { CustomerModel, QueryCustomers } from '../../../domain'

export class ListCustomersPagarme implements ListCustomersGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(query?: QueryCustomers): Promise<CustomerModel[]> {
		const params: string[] = []

		const url: string = `/customers`

		if (query) {
			Object.entries(query).forEach((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await this.axios.get(`${url}${params.join('')}`)

		return data
	}
}
