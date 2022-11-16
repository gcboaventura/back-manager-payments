import { AddPlanUseCase, PlanModel } from '@/domain'

export interface AddPlanGateway extends AddPlanUseCase {}

export interface AddPlanRepository {
	add(plan: PlanModel): Promise<PlanModel>
}
