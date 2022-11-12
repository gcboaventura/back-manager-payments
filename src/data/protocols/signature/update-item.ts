import {
	ItemsModel,
	ResponseHandleItemSignature,
	UpdateItemSignatureUseCase
} from '../../../domain'

export interface UpdateItemSignatureGateway extends UpdateItemSignatureUseCase {}

export interface UpdateItemSignatureRepository {
	update(item: ItemsModel): Promise<ResponseHandleItemSignature>
}
