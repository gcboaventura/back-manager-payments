import { AddSignatureUseCase, SignatureEntity, SignatureModel } from '../../domain'
import { AddSignatureInfra, AddSignatureRepositoryInfra } from '../protocols'

export class AddSignatureData implements AddSignatureUseCase {
	private readonly addSignatureInfra: AddSignatureInfra
	private readonly addRepository: AddSignatureRepositoryInfra

	constructor(addSignatureInfra: AddSignatureInfra, addRepository: AddSignatureRepositoryInfra) {
		this.addSignatureInfra = addSignatureInfra
		this.addRepository = addRepository
	}
	async add(signature: SignatureEntity): Promise<SignatureModel> {
		const insert = await this.addSignatureInfra.add(signature)

		await this.addRepository.add({
			id_signature: insert.id,
			created_at: insert.created_at,
			updated_at: insert.updated_at
		})

		return insert
	}
}
