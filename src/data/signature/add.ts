import { AddSignatureUseCase, Signature, SignatureModel } from '../../domain'
import {
	AddItemsSignatureRepository,
	AddSignatureGateway,
	AddSignatureRepository
} from '../protocols'

export class AddSignatureData implements AddSignatureUseCase {
	private readonly addSignatureGateway: AddSignatureGateway
	private readonly addSignatureRepository: AddSignatureRepository
	private readonly addItemsSignatureRepository: AddItemsSignatureRepository

	constructor(
		addSignatureGateway: AddSignatureGateway,
		addSignatureRepository: AddSignatureRepository,
		addItemsSignatureRepository: AddItemsSignatureRepository
	) {
		this.addSignatureGateway = addSignatureGateway
		this.addSignatureRepository = addSignatureRepository
		this.addItemsSignatureRepository = addItemsSignatureRepository
	}

	async add(signature: Signature): Promise<SignatureModel> {
		const addGateway = await this.addSignatureGateway.add(signature)

		await this.addSignatureRepository.add(addGateway)

		await this.addItemsSignatureRepository.add(addGateway)

		return addGateway
	}
}
