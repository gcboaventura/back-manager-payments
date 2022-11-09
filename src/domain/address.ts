import { CustomerModel } from './customer'

export interface Address {
	country: string
	state: string
	city: string
	zip_code: string
	line_1: string
	line_2: string
}

export interface AddressAdd extends Address {
	customer_id: string
}

export interface AddressModel extends Address {
	id: string
	customer: CustomerModel
}

export interface AddressUpdate {
	customer_id: string
	address_id: string
	line_2: string
}

export interface QueryListAddress {
	customer_id: string
	page?: number
	size?: number
}

export interface AddAddressUseCase {
	add(address: AddressAdd): Promise<AddressModel>
}

export interface GetAddressUseCase {
	get(customer_id: string, address_id: string): Promise<AddressModel>
}

export interface UpdateAddressUseCase {
	update(address: AddressUpdate): Promise<AddressModel>
}

export interface ListAddressUseCase {
	list(query: QueryListAddress): Promise<AddressModel[]>
}

export interface DeleteAddressUseCase {
	delete(customer_id: string, address_id: string): Promise<AddressModel>
}
