import { DeletePlanUseCase, PlanModel } from '../../domain'
import { DeletePlanInfra } from '../protocols'

export class DeletePlanData implements DeletePlanUseCase {
	private readonly addPlanInfra: DeletePlanInfra

	constructor(addPlanInfra: DeletePlanInfra) {
		this.addPlanInfra = addPlanInfra
	}
	async delete(id: string): Promise<PlanModel> {
		const plan = await this.addPlanInfra.delete(id)
		return plan
	}
}
