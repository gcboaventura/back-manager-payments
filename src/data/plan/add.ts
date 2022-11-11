import { AddPlanUseCase, Plan, PlanModel } from '../../domain'
import { AddPlanGateway, AddPlanRepository } from '../protocols'

export class AddPlanData implements AddPlanUseCase {
	private readonly addPlanGateway: AddPlanGateway
	private readonly addPlanRepository: AddPlanRepository

	constructor(addPlanGateway: AddPlanGateway, addPlanRepository: AddPlanRepository) {
		this.addPlanGateway = addPlanGateway
		this.addPlanRepository = addPlanRepository
	}

	async add(plan: Plan): Promise<PlanModel> {
		const addGateway = await this.addPlanGateway.add(plan)

		await this.addPlanRepository.add(addGateway)

		return addGateway
	}
}
