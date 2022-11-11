import { DeletePlanUseCase, PlanModel } from '../../domain'
import { DeletePlanGateway, DeletePlanRepository } from '../protocols'

export class DeletePlanData implements DeletePlanUseCase {
	private readonly deletePlanGateway: DeletePlanGateway
	private readonly deletePlanRepository: DeletePlanRepository

	constructor(deletePlanGateway: DeletePlanGateway, deletePlanRepository: DeletePlanRepository) {
		this.deletePlanGateway = deletePlanGateway
		this.deletePlanRepository = deletePlanRepository
	}

	async delete(plan_id: string): Promise<PlanModel> {
		const deleteGateway = await this.deletePlanGateway.delete(plan_id)

		await this.deletePlanRepository.delete(plan_id, deleteGateway.deleted_at)

		return deleteGateway
	}
}
