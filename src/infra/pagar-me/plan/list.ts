import { Axios } from 'axios'
import { ListPlansGateway } from '@/data'
import { GatewayResponse, PlanModel, QueryPlan } from '@/domain'
import { RequestModel } from '@/utils/request/types'

export class ListPlansPagarme implements ListPlansGateway {
	private readonly axios: Axios
	private readonly requestUtils: RequestModel

	constructor(axios: Axios, requestUtils: RequestModel) {
		this.axios = axios
		this.requestUtils = requestUtils
	}

	async list(query?: QueryPlan): Promise<GatewayResponse<PlanModel[]>> {
		const url: string = `/plans`

		const params = this.requestUtils.queryParam(query)

		const { data } = await this.axios.get(`${url}${params}`)

		return data
	}
}
