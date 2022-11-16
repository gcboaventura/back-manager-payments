import { AddItemSignatureUseCase, ItemSignature, ResponseHandleItemSignature } from '@/domain'
import { AddItemSignatureGateway, AddItemSignatureRepository } from '../protocols'

export class AddItemSignatureData implements AddItemSignatureUseCase {
	private readonly addItemSignatureGateway: AddItemSignatureGateway
	private readonly addItemSignatureRepository: AddItemSignatureRepository

	constructor(
		addItemSignatureGateway: AddItemSignatureGateway,
		addItemSignatureRepository: AddItemSignatureRepository
	) {
		this.addItemSignatureGateway = addItemSignatureGateway
		this.addItemSignatureRepository = addItemSignatureRepository
	}

	async add(subscription_id: string, item: ItemSignature): Promise<ResponseHandleItemSignature> {
		const addGateway = await this.addItemSignatureGateway.add(subscription_id, item)

		await this.addItemSignatureRepository.add(subscription_id, addGateway)

		return addGateway
	}
}
