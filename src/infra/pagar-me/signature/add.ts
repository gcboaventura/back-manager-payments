import { Axios } from 'axios'
import { AddSignatureGateway } from '@/data'
import { Signature, SignatureModel } from '@/domain'

export class AddSignaturePagarme implements AddSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(signature: Signature): Promise<SignatureModel> {
		const { data } = await this.axios.post(`/subscriptions`, signature)
		return data
	}
}
