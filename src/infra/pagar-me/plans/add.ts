import { AddPlanInfra } from '../../../data/protocols'
import { PlanEntity } from '../../../domain'
import { http } from '../../axios'

export class AddPlanPagarme implements AddPlanInfra {
	async add(plan: PlanEntity): Promise<any> {
		const { data } = await http.post('/plans', plan)
		return data
	}
}
