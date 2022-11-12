import { GetSignatureUseCase, SignatureModel } from '../../domain'
import { GetSignatureGateway } from '../protocols'

export class GetSignatureData implements GetSignatureUseCase {
	private readonly GetSignatureGateway: GetSignatureGateway

	constructor(GetSignatureGateway: GetSignatureGateway) {
		this.GetSignatureGateway = GetSignatureGateway
	}

	async get(signature_id: string): Promise<SignatureModel[]> {
		const signatureGateway = await this.GetSignatureGateway.get(signature_id)

		return signatureGateway
	}
}
