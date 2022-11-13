import { GetSignatureUseCase, SignatureModel } from '../../domain'
import { GetSignatureGateway } from '../protocols'

export class GetSignatureData implements GetSignatureUseCase {
	private readonly getSignatureGateway: GetSignatureGateway

	constructor(getSignatureGateway: GetSignatureGateway) {
		this.getSignatureGateway = getSignatureGateway
	}

	async get(signature_id: string): Promise<SignatureModel> {
		const signatureGateway = await this.getSignatureGateway.get(signature_id)

		return signatureGateway
	}
}
