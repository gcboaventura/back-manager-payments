import { DeleteItemSignatureGateway, DeleteItemSignatureRepository } from '../protocols'
import { DeleteItemSignatureUseCase, ResponseHandleItemSignature } from '@/domain'

export class DeleteItemSignatureData implements DeleteItemSignatureUseCase {
	private readonly deleteItemSignatureGateway: DeleteItemSignatureGateway
	private readonly deleteItemSignatureRepository: DeleteItemSignatureRepository

	constructor(
		deleteItemSignatureGateway: DeleteItemSignatureGateway,
		deleteItemSignatureRepository: DeleteItemSignatureRepository
	) {
		this.deleteItemSignatureGateway = deleteItemSignatureGateway
		this.deleteItemSignatureRepository = deleteItemSignatureRepository
	}

	async delete(subscription_id: string, item_id: string): Promise<ResponseHandleItemSignature> {
		const deleteGateway = await this.deleteItemSignatureGateway.delete(subscription_id, item_id)

		await this.deleteItemSignatureRepository.delete(deleteGateway)

		return deleteGateway
	}
}
