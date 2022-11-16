import { AddItemPlanUseCase, Items, ResponseHandleItemsPlans } from '@/domain'
import { AddItemPlanGateway, AddItemPlanRepository } from '../protocols'

export class AddItemPlanData implements AddItemPlanUseCase {
	private readonly addItemPlanGateway: AddItemPlanGateway
	private readonly addItemPlanRepository: AddItemPlanRepository

	constructor(
		addItemPlanGateway: AddItemPlanGateway,
		addItemPlanRepository: AddItemPlanRepository
	) {
		this.addItemPlanGateway = addItemPlanGateway
		this.addItemPlanRepository = addItemPlanRepository
	}

	async add(plan_id: string, item: Items): Promise<ResponseHandleItemsPlans> {
		const addGateway = await this.addItemPlanGateway.add(plan_id, item)

		await this.addItemPlanRepository.add(addGateway, plan_id)

		return addGateway
	}
}
