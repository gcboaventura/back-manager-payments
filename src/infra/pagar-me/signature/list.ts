import { Axios } from 'axios'
import { ListSignaturesGateway } from '../../../data'
import { GatewayResponse, QuerySignatures, SignatureModel } from '../../../domain'

export class ListSignaturesPagarme implements ListSignaturesGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(query?: QuerySignatures): Promise<GatewayResponse<SignatureModel[]>> {
		const params: string[] = []

		const url: string = `/subscriptions`

		if (query) {
			Object.entries(query).forEach((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await this.axios.get(`${url}${params.join('')}`)

		return data
	}
}
