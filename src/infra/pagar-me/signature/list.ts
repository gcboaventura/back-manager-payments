import { Axios } from 'axios'
import { ListSignaturesGateway } from '@/data'
import { GatewayResponse, QuerySignatures, SignatureModel } from '@/domain'
import { RequestModel } from '@/utils/request/types'

export class ListSignaturesPagarme implements ListSignaturesGateway {
	private readonly axios: Axios
	private readonly requestUtils: RequestModel

	constructor(axios: Axios, requestUtils: RequestModel) {
		this.axios = axios
		this.requestUtils = requestUtils
	}

	async list(query?: QuerySignatures): Promise<GatewayResponse<SignatureModel[]>> {
		const url: string = `/subscriptions`

		const params = this.requestUtils.queryParam(query)

		const { data } = await this.axios.get(`${url}${params}`)

		return data
	}
}
