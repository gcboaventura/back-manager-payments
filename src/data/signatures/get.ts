import { GetSignatureUseCase, SignatureModel } from '../../domain'
import { GetSignatureInfra } from '../protocols'

export class GetSignatureData implements GetSignatureUseCase {
	private readonly getSignatureInfra: GetSignatureInfra

	constructor(getSignatureInfra: GetSignatureInfra) {
		this.getSignatureInfra = getSignatureInfra
	}
	async get(id: string): Promise<SignatureModel> {
		const signature = await this.getSignatureInfra.get(id)
		return signature
	}
}
