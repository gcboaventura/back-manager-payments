import { UpdateItemPlanUseCase, ResponseHandleItemsPlans, ItemModelPlan } from '@/domain'
import { UpdateItemPlanGateway, UpdateItemPlanRepository } from '../protocols'

export class UpdateItemPlanData implements UpdateItemPlanUseCase {
	private readonly updateItemPlanGateway: UpdateItemPlanGateway
	private readonly updateItemPlanRepository: UpdateItemPlanRepository

	constructor(
		updateItemPlanGateway: UpdateItemPlanGateway,
		updateItemPlanRepository: UpdateItemPlanRepository
	) {
		this.updateItemPlanGateway = updateItemPlanGateway
		this.updateItemPlanRepository = updateItemPlanRepository
	}

	async update(
		plan_id: string,
		item_id: string,
		item: ItemModelPlan
	): Promise<ResponseHandleItemsPlans> {
		const updateGateway = await this.updateItemPlanGateway.update(plan_id, item_id, item)

		await this.updateItemPlanRepository.update(updateGateway)

		return updateGateway
	}
}
