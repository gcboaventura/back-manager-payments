import {
	DeleteItemSignatureUseCase,
	ItemsModel,
	ResponseHandleItemSignature
} from '../../../domain'

export interface DeleteItemSignatureGateway extends DeleteItemSignatureUseCase {}

export interface DeleteItemSignatureRepository {
	delete(item: ItemsModel): Promise<ResponseHandleItemSignature>
}
