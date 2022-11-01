import { UpdatePlanUseCase, PlanModel } from '../../domain'
import { UpdatePlanInfra } from '../protocols'

export class UpdatePlanData implements UpdatePlanUseCase {
	private readonly updatePlanInfra: UpdatePlanInfra

	constructor(updatePlanInfra: UpdatePlanInfra) {
		this.updatePlanInfra = updatePlanInfra
	}
	async update(plan: PlanModel): Promise<any> {
		const insert = await this.updatePlanInfra.update(plan)
		return insert
	}
}
