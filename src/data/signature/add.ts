import { AddSignatureUseCase, Signature, SignatureModel } from '../../domain'
import { AddSignatureGateway, AddSignatureRepository } from '../protocols'

export class AddSignatureData implements AddSignatureUseCase {
	private readonly addSignatureGateway: AddSignatureGateway
	private readonly addSignatureRepository: AddSignatureRepository

	constructor(
		addSignatureGateway: AddSignatureGateway,
		addSignatureRepository: AddSignatureRepository
	) {
		this.addSignatureGateway = addSignatureGateway
		this.addSignatureRepository = addSignatureRepository
	}

	async add(signature: Signature): Promise<SignatureModel> {
		const addGateway = await this.addSignatureGateway.add(signature)

		await this.addSignatureRepository.add(addGateway)

		return addGateway
	}
}
