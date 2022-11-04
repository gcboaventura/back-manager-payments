import { UpdateStartDateSignatureUseCase, SignatureModel } from '../../domain'
import { UpdateStartDateSignatureInfra } from '../protocols'

export class UpdateStartDateSignatureData implements UpdateStartDateSignatureUseCase {
	private readonly updateStartDateSignatureInfra: UpdateStartDateSignatureInfra

	constructor(updateStartDateSignatureInfra: UpdateStartDateSignatureInfra) {
		this.updateStartDateSignatureInfra = updateStartDateSignatureInfra
	}
	async update(start_at: Date, idSignature: string): Promise<SignatureModel> {
		const update = await this.updateStartDateSignatureInfra.update(start_at, idSignature)
		return update
	}
}
