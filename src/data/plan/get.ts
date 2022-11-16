import { GetPlanUseCase, Plan, PlanModel } from '@/domain'
import { GetPlanGateway } from '../protocols'

export class GetPlanData implements GetPlanUseCase {
	private readonly getPlanGateway: GetPlanGateway

	constructor(getPlanGateway: GetPlanGateway) {
		this.getPlanGateway = getPlanGateway
	}

	async get(plan_id: string): Promise<PlanModel> {
		const addGateway = await this.getPlanGateway.get(plan_id)

		return addGateway
	}
}
