import { UpdatePlanUseCase, Plan, PlanModel } from '@/domain'
import { UpdatePlanGateway, UpdatePlanRepository } from '../protocols'

export class UpdatePlanData implements UpdatePlanUseCase {
	private readonly updatePlanGateway: UpdatePlanGateway
	private readonly updatePlanRepository: UpdatePlanRepository

	constructor(updatePlanGateway: UpdatePlanGateway, updatePlanRepository: UpdatePlanRepository) {
		this.updatePlanGateway = updatePlanGateway
		this.updatePlanRepository = updatePlanRepository
	}

	async update(plan: Plan, plan_id: string): Promise<PlanModel> {
		const updateGateway = await this.updatePlanGateway.update(plan, plan_id)

		await this.updatePlanRepository.update(updateGateway)

		return updateGateway
	}
}
