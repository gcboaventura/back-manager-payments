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
	name: string
	email: string
	delinquent: boolean
	created_at: string
	updated_at: string
	phones: any
}

export type TypePesron = 'individual' | 'company'

export type DocumentType = 'CPF' | 'CNPJ' | 'PASSAPORTE'

export type Gender = 'male' | 'female'

export interface Address {
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
