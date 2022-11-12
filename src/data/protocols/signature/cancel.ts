import { CancelSignatureUseCase, SignatureModel } from '../../../domain'

export interface CancelSignatureGateway extends CancelSignatureUseCase {}

export interface CancelSignatureRepository {
	cancel(signature_id: string, canceled_at: string): Promise<SignatureModel>
}
