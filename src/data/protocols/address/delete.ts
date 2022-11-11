import { AddressModel, DeleteAddressUseCase } from '../../../domain'

export interface DeleteAddressGateway extends DeleteAddressUseCase {}

export interface DeleteAddressRepository {
	delete(address_id: string): Promise<AddressModel>
}
