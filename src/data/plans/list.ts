import { ListPlansUseCase, PlanModel, QueryListPlans } from '../../domain'
import { ListPlansInfra } from '../protocols'

export class ListPlanData implements ListPlansUseCase {
	private readonly listPlansInfra: ListPlansInfra

	constructor(listPlansInfra: ListPlansInfra) {
		this.listPlansInfra = listPlansInfra
	}
	async get(query?: QueryListPlans): Promise<PlanModel[]> {
		const list = await this.listPlansInfra.get(query)
		return list
	}
}
