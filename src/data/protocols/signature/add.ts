import { AddSignatureUseCase, ItemsModel, SignatureModel } from '../../../domain'

export interface AddSignatureGateway extends AddSignatureUseCase {}

export interface AddSignatureRepository {
	add(signature: SignatureModel): Promise<SignatureModel>
}
