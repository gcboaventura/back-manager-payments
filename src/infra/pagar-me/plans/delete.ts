import { DeletePlanInfra } from '../../../data/protocols'
import { PlanModel } from '../../../domain'
import { http } from '../../axios'

export class DeletePlanPagarme implements DeletePlanInfra {
	async delete(id: string): Promise<PlanModel> {
		const { data } = await http.delete(`/plans/${id}`)
		return data
	}
}
