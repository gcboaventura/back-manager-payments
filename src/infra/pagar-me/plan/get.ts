import { Axios } from 'axios'
import { GetPlanGateway } from '../../../data'
import { PlanModel } from '../../../domain'

export class GetPlanPagarme implements GetPlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(plan_id: string): Promise<PlanModel> {
		const { data } = await this.axios.get(`/plans/${plan_id}`)
		return data
	}
}
