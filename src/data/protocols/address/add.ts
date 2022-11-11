import { AddAddressUseCase, AddressModel } from '../../../domain'

export interface AddAddressGateway extends AddAddressUseCase {}

export interface AddAddressRepository {
	add(address: AddressModel): Promise<AddressModel>
}
