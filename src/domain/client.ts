export interface ClientEntity extends ClientGatewayEntity {
	plan: number
	due_date: Date
}

export interface ClientModel {
	id_gateway: string
	email: string
	plan: number
	due_date: Date
	card_token?: string
	created_at: Date
	updated_at: Date
}

export interface AddClientUseCase {
	add(client: ClientEntity): Promise<ClientModel>
}

export interface ClientGatewayEntity {
	name: string
	email: string
	code: string
	document: string
	document_type: DocumentType
	type?: TypeClient
	gender: Gender
	address: Address
	phones: Phones
	birthdate: Date
}

export interface ClientGatewayModel extends ClientEntity {
	id: string
	delinquent: boolean
	created_at: Date
	updated_at: Date
}

export type DocumentType = 'CPF' | 'CNPJ' | 'PASSPORT'

export type TypeClient = 'individual' | 'company'

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
	home_phone: HomePhone
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
