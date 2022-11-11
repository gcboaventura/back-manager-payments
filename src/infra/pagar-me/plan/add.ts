import { Axios } from 'axios'
import { AddPlanGateway } from '../../../data'
import { Plan, PlanModel } from '../../../domain'

export class AddPlanPagarme implements AddPlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(plan: Plan): Promise<PlanModel> {
		const { data } = await this.axios.post(`/plans`, plan)
		return data
	}
}
