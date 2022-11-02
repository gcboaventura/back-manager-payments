import { GetPlanUseCase, PlanModel } from '../../domain'
import { GetPlanInfra } from '../protocols'

export class GetPlanData implements GetPlanUseCase {
	private readonly getPlanInfra: GetPlanInfra

	constructor(getPlanInfra: GetPlanInfra) {
		this.getPlanInfra = getPlanInfra
	}
	async get(id: string): Promise<PlanModel> {
		const plan = await this.getPlanInfra.get(id)
		return plan
	}
}
