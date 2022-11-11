import { Axios } from 'axios'
import { ListPlansGateway } from '../../../data'
import { GatewayResponse, PlanModel, QueryPlan } from '../../../domain'

export class ListPlansPagarme implements ListPlansGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async list(query?: QueryPlan): Promise<GatewayResponse<PlanModel[]>> {
		const params: string[] = []

		const url: string = `/plans`

		if (query) {
			Object.entries(query).forEach((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await this.axios.get(`${url}${params.join('')}`)

		return data
	}
}
