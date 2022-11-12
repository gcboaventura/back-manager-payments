import { Axios } from 'axios'
import { CancelSignatureGateway } from '../../../data'
import { SignatureModel } from '../../../domain'

export class CancelSignaturePagarme implements CancelSignatureGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async cancel(signature_id: string): Promise<SignatureModel> {
		const { data } = await this.axios.delete(`/subscriptions/${signature_id}`)
		return data
	}
}
