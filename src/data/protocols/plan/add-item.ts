import { AddItemPlanUseCase, ItemModelPlan, ResponseHandleItemsPlans } from '../../../domain'

export interface AddItemPlanGateway extends AddItemPlanUseCase {}

export interface AddItemPlanRepository {
	add(item: ItemModelPlan): Promise<ResponseHandleItemsPlans>
}
