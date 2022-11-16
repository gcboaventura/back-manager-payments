import { Axios } from 'axios'
import { ListItemsSignatureGateway } from '@/data'
import { GatewayResponse, ItemsModel, QueryItemSignature } from '@/domain'

export class ListItemsSignaturePagarme implements ListItemsSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(
		subscription_id: string,
		query?: QueryItemSignature
	): Promise<GatewayResponse<ItemsModel[]>> {
		const params: string[] = []

		const url: string = `/subscriptions/${subscription_id}/items`

		if (query) {
			Object.entries(query).forEach((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await this.axios.get(`${url}${params.join('')}`)

		return data
	}
}
