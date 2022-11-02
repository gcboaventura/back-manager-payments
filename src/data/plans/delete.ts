import { DeletePlanUseCase, PlanModel } from '../../domain'
import { DeletePlanInfra } from '../protocols'

export class DeletePlanData implements DeletePlanUseCase {
	private readonly deletePlanInfra: DeletePlanInfra

	constructor(deletePlanInfra: DeletePlanInfra) {
		this.deletePlanInfra = deletePlanInfra
	}
	async delete(id: string): Promise<PlanModel> {
		const plan = await this.deletePlanInfra.delete(id)
		return plan
	}
}
