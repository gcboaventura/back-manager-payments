import { Axios } from 'axios'
import { UpdateItemSignatureGateway } from '../../../data'
import { ItemSignature, ResponseHandleItemSignature } from '../../../domain'

export class UpdateItemSignaturePagarme implements UpdateItemSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(
		subscription_id: string,
		item_id: string,
		item: ItemSignature
	): Promise<ResponseHandleItemSignature> {
		const { data } = await this.axios.put(
			`/subscriptions/${subscription_id}/items/${item_id}`,
			item
		)
		return data
	}
}
