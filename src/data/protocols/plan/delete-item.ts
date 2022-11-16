import { DeleteItemPlanUseCase, ResponseHandleItemsPlans } from '@/domain'

export interface DeleteItemPlanGateway extends DeleteItemPlanUseCase {}

export interface DeleteItemPlanRepository {
	delete(deleted_at: string, item_id: string): Promise<ResponseHandleItemsPlans>
}
