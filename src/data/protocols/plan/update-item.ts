import { ItemModelPlan, ResponseHandleItemsPlans, UpdateItemPlanUseCase } from '../../../domain'

export interface UpdateItemPlanGateway extends UpdateItemPlanUseCase {}

export interface UpdateItemPlanRepository {
	update(plan: ItemModelPlan): Promise<ResponseHandleItemsPlans>
}
