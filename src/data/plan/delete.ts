import { DeletePlanUseCase, ItemModelPlan, PlanModel } from '../../domain'
import {
	DeleteItemPlanRepository,
	DeletePlanGateway,
	DeletePlanRepository,
	GetPlanGateway
} from '../protocols'

export class DeletePlanData implements DeletePlanUseCase {
	private readonly deletePlanGateway: DeletePlanGateway
	private readonly deletePlanRepository: DeletePlanRepository
	private readonly getPlanGateway: GetPlanGateway
	private readonly deleteItemsPlanRepository: DeleteItemPlanRepository

	constructor(
		deletePlanGateway: DeletePlanGateway,
		deletePlanRepository: DeletePlanRepository,
		getPlanGateway: GetPlanGateway,
		deleteItemsPlanRepository: DeleteItemPlanRepository
	) {
		this.deletePlanGateway = deletePlanGateway
		this.deletePlanRepository = deletePlanRepository
		this.getPlanGateway = getPlanGateway
		this.deleteItemsPlanRepository = deleteItemsPlanRepository
	}

	async delete(plan_id: string): Promise<PlanModel> {
		const deletedPlan = await this.getPlanGateway.get(plan_id)

		const deleteGateway = await this.deletePlanGateway.delete(plan_id)

		await this.deletePlanRepository.delete(plan_id, deleteGateway.deleted_at)

		const deleteItems = deletedPlan.items.map(async (x: ItemModelPlan) => {
			await this.deleteItemsPlanRepository.delete(deleteGateway.deleted_at, x.id)
		})

		await Promise.all(deleteItems)

		return deleteGateway
	}
}
