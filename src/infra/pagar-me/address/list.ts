import { Axios } from 'axios'
import { ListAddressGateway } from '../../../data/protocols/address'
import { AddressModel, GatewayResponse, QueryListAddress } from '../../../domain'

export class ListAddressPagarme implements ListAddressGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(
		query: QueryListAddress,
		customer_id: string
	): Promise<GatewayResponse<AddressModel[]>> {
		const params: string[] = []

		const url: string = `/customers/${customer_id}/addresses`

		if (query) {
			Object.entries(query).forEach((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await this.axios.get(`${url}${params.join('')}`)

		return data
	}
}
