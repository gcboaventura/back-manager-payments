import { CancelSignatureUseCase, SignatureModel } from '../../domain'
import { CancelSignatureInfra } from '../protocols'

export class CancelSignatureData implements CancelSignatureUseCase {
	private readonly cancelSignatureInfra: CancelSignatureInfra

	constructor(cancelSignatureInfra: CancelSignatureInfra) {
		this.cancelSignatureInfra = cancelSignatureInfra
	}
	async cancel(id: string): Promise<SignatureModel> {
		const signature = await this.cancelSignatureInfra.cancel(id)
		return signature
	}
}
