import { AddItemPlanUseCase, ItemModelPlan, ResponseHandleItemsPlans } from '@/domain'

export interface AddItemPlanGateway extends AddItemPlanUseCase {}

export interface AddItemPlanRepository {
	add(item: ItemModelPlan, plan_id: string): Promise<ResponseHandleItemsPlans>
}
