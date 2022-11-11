import { Address, AddressModel } from './address'
import { GatewayResponse } from './gateway'

export interface Customer {
	name: string //max 64 caracteres
	email: string //max 64 caracteres
	code?: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	type: TypePesron
	gender: Gender
	address: Address
	phones: Phones
	birthdate: Date
}

export interface CustomerModel {
	id: string
	name: string //max 64 caracteres
	email: string //max 64 caracteres
	code?: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	type: TypePesron
	gender: Gender
	address: AddressModel
	phones: Phones
	birthdate: Date
	delinquent: boolean
	created_at: string
	updated_at: string
}

export interface CustomerUpdateEntity {
	name: string //max 64 caracteres
	email: string //max 64 caracteres
	code?: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	type: TypePesron
	gender: Gender
	phones: Phones
	birthdate: Date
}

export interface CustomerUpdateModel {
	id: string
	name: string //max 64 caracteres
	email: string //max 64 caracteres
	code?: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	type: TypePesron
	gender: Gender
	phones: Phones
	birthdate: Date
	delinquent: boolean
	created_at: string
	updated_at: string
}

export interface AddCustomerUseCase {
	add(customer: Customer): Promise<CustomerModel>
}

export interface LoadCustomerByEmailUseCase {
	get(email: string): Promise<GatewayResponse<CustomerModel>>
}

export interface GetCustomerUseCase {
	get(id: string): Promise<CustomerModel>
}

export interface UpdateCustomerUseCase {
	update(customer: CustomerUpdateEntity, id: string): Promise<CustomerUpdateModel>
}

export interface ListCustomersUseCase {
	list(query?: QueryCustomers): Promise<CustomerModel[]>
}

export interface QueryCustomers {
	name?: string
	document?: string
	email?: string
	gender?: Gender
	page?: number
	size?: number
	code?: string
}

export type TypePesron = 'individual' | 'company'

export type DocumentType = 'CPF' | 'CNPJ' | 'PASSAPORTE'

export type Gender = 'male' | 'female'

export interface Phones {
	home_phone?: HomePhone
	mobile_phone: MobilePhone
}

export interface HomePhone {
	country_code: string
	area_code: string
	number: string
}

export interface MobilePhone {
	country_code: string
	area_code: string
	number: string
}
