import { Axios } from 'axios'
import { GetSignatureGateway } from '@/data'
import { SignatureModel } from '@/domain'

export class GetSignaturePagarme implements GetSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(signature_id: string): Promise<SignatureModel> {
		const { data } = await this.axios.get(`/subscriptions/${signature_id}`)
		return data
	}
}
