import { Axios } from 'axios'
import { ListCustomersGateway } from '@/data'
import { CustomerModel, GatewayResponse, QueryCustomers } from '@/domain'
import { RequestModel } from '@/utils/request/types'

export class ListCustomersPagarme implements ListCustomersGateway {
	private readonly axios: Axios
	private readonly requestUtils: RequestModel

	constructor(axios: Axios, requestUtils: RequestModel) {
		this.axios = axios
		this.requestUtils = requestUtils
	}

	async list(query?: QueryCustomers): Promise<GatewayResponse<CustomerModel[]>> {
		const url: string = `/customers`

		const params = this.requestUtils.queryParam(query)

		const { data } = await this.axios.get(`${url}${params}`)

		return data
	}
}
