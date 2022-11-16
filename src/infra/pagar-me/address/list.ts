import { Axios } from 'axios'
import { ListAddressGateway } from '../../../data/protocols/address'
import { AddressModel, GatewayResponse, QueryListAddress } from '../../../domain'
import { RequestModel } from '../../../utils/request/types'

export class ListAddressPagarme implements ListAddressGateway {
	private readonly axios: Axios
	private readonly requestUtils: RequestModel

	constructor(axios: Axios, requestUtils: RequestModel) {
		this.axios = axios
		this.requestUtils = requestUtils
	}

	async list(
		query: QueryListAddress,
		customer_id: string
	): Promise<GatewayResponse<AddressModel[]>> {
		const url: string = `/customers/${customer_id}/addresses`

		const params = this.requestUtils.queryParam(query)

		const { data } = await this.axios.get(`${url}${params}`)

		return data
	}
}
