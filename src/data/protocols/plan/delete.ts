import { DeletePlanUseCase, PlanModel } from '../../../domain'

export interface DeletePlanGateway extends DeletePlanUseCase {}

export interface DeletePlanRepository {
	delete(plan_id: string, deleted_at: string): Promise<PlanModel>
}
