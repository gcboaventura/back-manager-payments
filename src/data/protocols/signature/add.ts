import { AddSignatureUseCase, SignatureModel } from '../../../domain'

export interface AddSignatureGateway extends AddSignatureUseCase {}

export interface AddSignatureRepository {
	add(signature: SignatureModel): Promise<SignatureModel>
}

export interface AddItemsSignatureRepository {
	add(signature: SignatureModel): Promise<SignatureModel>
}
