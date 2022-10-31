import { GetPlanInfra } from '../../../data/protocols'
import { PlanModel } from '../../../domain'
import { http } from '../../axios'

export class GetPlanPagarme implements GetPlanInfra {
	async get(id: string): Promise<PlanModel> {
		const { data } = await http.get(`/plans/${id}`)
		return data
	}
}
