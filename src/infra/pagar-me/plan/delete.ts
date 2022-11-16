import { Axios } from 'axios'
import { DeletePlanGateway } from '@/data'
import { PlanModel } from '@/domain'

export class DeletePlanPagarme implements DeletePlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async delete(plan_id: string): Promise<PlanModel> {
		const { data } = await this.axios.delete(`/plans/${plan_id}`)
		return data
	}
}
