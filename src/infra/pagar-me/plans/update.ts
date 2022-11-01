import { UpdatePlanInfra } from '../../../data/protocols'
import { PlanModel } from '../../../domain'
import { http } from '../../axios'

export class UpdatePlanPagarme implements UpdatePlanInfra {
	async update(plan: PlanModel): Promise<any> {
		const { data } = await http.put(`/plans/${plan.id}`, Object.assign({}, plan, { id: undefined }))
		return data
	}
}
