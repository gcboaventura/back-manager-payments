import { Axios } from 'axios'
import { UpdatePlanGateway } from '../../../data'
import { Plan, PlanModel } from '../../../domain'

export class UpdatePlanPagarme implements UpdatePlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(plan: Plan, plan_id: string): Promise<PlanModel> {
		const { data } = await this.axios.post(`/plans/${plan_id}`, plan)
		return data
	}
}
