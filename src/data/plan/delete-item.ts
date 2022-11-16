import { DeleteItemPlanUseCase, ResponseHandleItemsPlans } from '@/domain'
import { DeleteItemPlanGateway, DeleteItemPlanRepository } from '../protocols'

export class DeleteItemPlanData implements DeleteItemPlanUseCase {
	private readonly deleteItemPlanGateway: DeleteItemPlanGateway
	private readonly deleteItemPlanRepository: DeleteItemPlanRepository

	constructor(
		deleteItemPlanGateway: DeleteItemPlanGateway,
		deleteItemPlanRepository: DeleteItemPlanRepository
	) {
		this.deleteItemPlanGateway = deleteItemPlanGateway
		this.deleteItemPlanRepository = deleteItemPlanRepository
	}

	async delete(plan_id: string, item_id: string): Promise<ResponseHandleItemsPlans> {
		const deleteGateway = await this.deleteItemPlanGateway.delete(plan_id, item_id)

		await this.deleteItemPlanRepository.delete(deleteGateway.deleted_at, item_id)

		return deleteGateway
	}
}
