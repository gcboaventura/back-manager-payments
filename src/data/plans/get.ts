import { GetPlanUseCase, PlanModel } from '../../domain'
import { GetPlanInfra } from '../protocols'

export class GetPlanData implements GetPlanUseCase {
	private readonly addPlanInfra: GetPlanInfra

	constructor(addPlanInfra: GetPlanInfra) {
		this.addPlanInfra = addPlanInfra
	}
	async get(id: string): Promise<PlanModel> {
		const plan = await this.addPlanInfra.get(id)
		return plan
	}
}
