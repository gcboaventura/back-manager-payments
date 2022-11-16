import { Axios } from 'axios'
import { UpdateItemSignatureGateway } from '@/data'
import { ResponseHandleItemSignature, UpdateItemSignature } from '@/domain'

export class UpdateItemSignaturePagarme implements UpdateItemSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(
		subscription_id: string,
		item_id: string,
		item: UpdateItemSignature
	): Promise<ResponseHandleItemSignature> {
		const { data } = await this.axios.put(
			`/subscriptions/${subscription_id}/items/${item_id}`,
			item
		)
		return data
	}
}
