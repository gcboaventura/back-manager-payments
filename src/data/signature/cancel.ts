import { CancelSignatureUseCase, SignatureModel } from '../../domain'
import { CancelSignatureGateway, CancelSignatureRepository } from '../protocols'

export class CancelSignatureData implements CancelSignatureUseCase {
	private readonly cancelSignatureGateway: CancelSignatureGateway
	private readonly cancelSignatureRepository: CancelSignatureRepository

	constructor(
		cancelSignatureGateway: CancelSignatureGateway,
		cancelSignatureRepository: CancelSignatureRepository
	) {
		this.cancelSignatureGateway = cancelSignatureGateway
		this.cancelSignatureRepository = cancelSignatureRepository
	}

	async cancel(signature_id: string): Promise<SignatureModel> {
		const cancelGateway = await this.cancelSignatureGateway.cancel(signature_id)

		await this.cancelSignatureRepository.cancel(signature_id)

		return cancelGateway
	}
}
