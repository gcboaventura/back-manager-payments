import { ItemModelPlan, ResponseHandleItemsPlans, UpdateItemPlanUseCase } from '@/domain'

export interface UpdateItemPlanGateway extends UpdateItemPlanUseCase {}

export interface UpdateItemPlanRepository {
	update(item: ItemModelPlan): Promise<ResponseHandleItemsPlans>
}
