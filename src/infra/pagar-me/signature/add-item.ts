import { Axios } from 'axios'
import { AddItemSignatureGateway } from '../../../data'
import { ItemSignature, SignatureModel } from '../../../domain'

export class AddItemSignaturePagarme implements AddItemSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(subscription_id: string, item: ItemSignature): Promise<SignatureModel> {
		const { data } = await this.axios.post(`/subscriptions/${subscription_id}/items`, item)
		return data
	}
}
