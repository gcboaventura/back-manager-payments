import { AddCustomerUseCase, AddressModel, CustomerModel } from '../../../domain'

export interface AddCustomerGateway extends AddCustomerUseCase {}

export interface AddCustomerRepository {
	add(customer: CustomerModel): Promise<CustomerModel>
}

export interface AddAddressRepository {
	add(address: AddressModel, customer_id: string): Promise<AddressModel>
}
