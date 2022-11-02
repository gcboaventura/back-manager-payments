import { DeleteSignatureUseCase, SignatureModel } from '../../domain'
import { DeleteSignatureInfra } from '../protocols'

export class DeleteSignatureData implements DeleteSignatureUseCase {
	private readonly deleteSignatureInfra: DeleteSignatureInfra

	constructor(deleteSignatureInfra: DeleteSignatureInfra) {
		this.deleteSignatureInfra = deleteSignatureInfra
	}
	async delete(id: string): Promise<SignatureModel> {
		const signature = await this.deleteSignatureInfra.delete(id)
		return signature
	}
}
