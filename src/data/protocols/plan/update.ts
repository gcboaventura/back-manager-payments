import { PlanModel, UpdatePlanUseCase } from '@/domain'

export interface UpdatePlanGateway extends UpdatePlanUseCase {}

export interface UpdatePlanRepository {
	update(plan: PlanModel): Promise<PlanModel>
}
