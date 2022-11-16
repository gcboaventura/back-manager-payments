import { AddItemSignatureUseCase, ItemsModel } from '@/domain'

export interface AddItemSignatureGateway extends AddItemSignatureUseCase {}

export interface AddItemSignatureRepository {
	add(subscription_id: string, item: ItemsModel): Promise<void>
}
