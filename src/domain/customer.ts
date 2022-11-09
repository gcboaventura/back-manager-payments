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
	delinquent: boolean
	created_at: string
	updated_at: string
}

export interface AddCustomerUseCase {
	add(customer: Customer): Promise<CustomerModel>
}

export interface GetCustomerUseCase {
	get(id: string): Promise<CustomerModel>
}

export interface UpdateCustomerUseCase {
	update(customer: CustomerModel): Promise<CustomerModel>
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

export interface Address {
	id?: string
	country: string
	state: string
	city: string
	zip_code: string
	line_1: string
	line_2: string
}

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
