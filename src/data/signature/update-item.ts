import { UpdateItemSignatureGateway, UpdateItemSignatureRepository } from '../protocols'
import {
	UpdateItemSignatureUseCase,
	ResponseHandleItemSignature,
	UpdateItemSignature
} from '@/domain'

export class UpdateItemSignatureData implements UpdateItemSignatureUseCase {
	private readonly updateItemSignatureGateway: UpdateItemSignatureGateway
	private readonly updateItemSignatureRepository: UpdateItemSignatureRepository

	constructor(
		updateItemSignatureGateway: UpdateItemSignatureGateway,
		updateItemSignatureRepository: UpdateItemSignatureRepository
	) {
		this.updateItemSignatureGateway = updateItemSignatureGateway
		this.updateItemSignatureRepository = updateItemSignatureRepository
	}

	async update(
		subscription_id: string,
		item_id: string,
		item: UpdateItemSignature
	): Promise<ResponseHandleItemSignature> {
		const updateGateway = await this.updateItemSignatureGateway.update(
			subscription_id,
			item_id,
			item
		)

		await this.updateItemSignatureRepository.update(updateGateway)

		return updateGateway
	}
}
