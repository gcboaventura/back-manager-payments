import { Axios } from 'axios'
import { DeleteItemSignatureGateway } from '../../../data'
import { ResponseHandleItemSignature } from '../../../domain'

export class DeleteItemSignaturePagarme implements DeleteItemSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async delete(subscription_id: string, item_id: string): Promise<ResponseHandleItemSignature> {
		const { data } = await this.axios.delete(`/subscriptions/${subscription_id}/items/${item_id}`)
		return data
	}
}
