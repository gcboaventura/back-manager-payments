import { CustomerModel } from './customer'
import { GatewayResponse } from './gateway'

export interface Address {
	country: string
	state: string
	city: string
	zip_code: string
	line_1: string
	line_2: string
}

export interface AddressModel extends Address {
	id: string
	customer: CustomerModel
	deleted_at: string
	created_at: string
	updated_at: string
	status: StatusAddress
}

export interface AddressUpdate {
	line_2: string
}

export interface QueryListAddress {
	customer_id: string
	page?: number
	size?: number
}

export type StatusAddress = 'active' | 'deleted'

export interface AddAddressUseCase {
	add(address: Address, customer_id: string): Promise<AddressModel>
}

export interface GetAddressUseCase {
	get(customer_id: string, address_id: string): Promise<AddressModel>
}

export interface UpdateAddressUseCase {
	update(address: AddressUpdate, customer_id: string, address_id: string): Promise<AddressModel>
}

export interface ListAddressUseCase {
	list(query: QueryListAddress, customer_id: string): Promise<GatewayResponse<AddressModel[]>>
}

export interface DeleteAddressUseCase {
	delete(customer_id: string, address_id: string): Promise<AddressModel>
}
