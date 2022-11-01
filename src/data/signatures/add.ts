import { AddSignatureUseCase, SignatureEntity, SignatureModel } from '../../domain'
import { AddSignatureInfra } from '../protocols'

export class AddSignatureData implements AddSignatureUseCase {
	private readonly addSignatureInfra: AddSignatureInfra

	constructor(addSignatureInfra: AddSignatureInfra) {
		this.addSignatureInfra = addSignatureInfra
	}
	async add(signature: SignatureEntity): Promise<SignatureModel> {
		const insert = await this.addSignatureInfra.add(signature)
		return insert
	}
}
