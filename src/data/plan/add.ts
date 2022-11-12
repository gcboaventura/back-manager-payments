import { AddPlanUseCase, ItemModelPlan, Plan, PlanModel } from '../../domain'
import { AddItemPlanRepository, AddPlanGateway, AddPlanRepository } from '../protocols'

export class AddPlanData implements AddPlanUseCase {
	private readonly addPlanGateway: AddPlanGateway
	private readonly addPlanRepository: AddPlanRepository
	private readonly addItemPlanRepository: AddItemPlanRepository

	constructor(
		addPlanGateway: AddPlanGateway,
		addPlanRepository: AddPlanRepository,
		addItemPlanRepository: AddItemPlanRepository
	) {
		this.addPlanGateway = addPlanGateway
		this.addPlanRepository = addPlanRepository
		this.addItemPlanRepository = addItemPlanRepository
	}

	async add(plan: Plan): Promise<PlanModel> {
		const addGateway = await this.addPlanGateway.add(plan)

		await this.addPlanRepository.add(addGateway)

		const insertItems = addGateway.items.map(async (x: ItemModelPlan) => {
			await this.addItemPlanRepository.add(x, addGateway.id)
		})

		await Promise.all(insertItems)

		return addGateway
	}
}
