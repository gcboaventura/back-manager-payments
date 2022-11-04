import { UpdateCardSignatureUseCase, SignatureModel } from '../../domain'
import { CardUpdate } from '../../domain/card'
import { UpdateCardSignatureInfra } from '../protocols'

export class UpdateCardSignatureData implements UpdateCardSignatureUseCase {
	private readonly updateCardSignatureInfra: UpdateCardSignatureInfra

	constructor(updateCardSignatureInfra: UpdateCardSignatureInfra) {
		this.updateCardSignatureInfra = updateCardSignatureInfra
	}
	async update(card: CardUpdate, idSignature: string): Promise<SignatureModel> {
		const update = await this.updateCardSignatureInfra.update(card, idSignature)
		return update
	}
}
