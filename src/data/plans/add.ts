import { AddPlanUseCase, PlanEntity } from '../../domain'
import { AddPlanInfra } from '../protocols'

export class AddPlanData implements AddPlanUseCase {
	private readonly addPlanInfra: AddPlanInfra

	constructor(addPlanInfra: AddPlanInfra) {
		this.addPlanInfra = addPlanInfra
	}
	async add(plan: PlanEntity): Promise<any> {
		const insert = await this.addPlanInfra.add(plan)
		return insert
	}
}
