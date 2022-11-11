import { AddressModel, UpdateAddressUseCase } from '../../../domain'

export interface UpdateAddressGateway extends UpdateAddressUseCase {}

export interface UpdateAddressRepository {
	update(address: AddressModel): Promise<AddressModel>
}
