import { Address } from './address'
import { Phones } from './phones'

export interface ClientEntity {
	name: string //max 64 caracteres
	type: TypePesron
	email: string //max 64 caracteres
	code: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	gender: Gender
	address: Address
	phones: Phones
	birthdate: Date
}

export interface ClientModel {
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
