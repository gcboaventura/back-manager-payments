import { AddClientUseCase } from '../../../domain/client'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddClientController implements Controller {
	private readonly addClient: AddClientUseCase

	constructor(addClient: AddClientUseCase) {
		this.addClient = addClient
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = [
				'name',
				'email',
				'code',
				'document',
				'document_type',
				'type',
				'gender',
				'address',
				'phones',
				'birthdate'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const requiredFieldsAddress: string[] = [
				'country',
				'state',
				'city',
				'zip_code',
				'line_1',
				'line_2'
			]

			for (const field of requiredFieldsAddress) {
				if (!httpRequest.body.address[field]) {
					return badRequest(new MissingParamError(`address: ${field}`))
				}
			}

			const requiredFieldsPhone: string[] = ['home_phone', 'mobile_phone']

			for (const field of requiredFieldsPhone) {
				if (!httpRequest.body.phones[field]) {
					return badRequest(new MissingParamError(`phone: ${field}`))
				}
			}

			const requiredFieldsPhoneFields: string[] = ['country_code', 'area_code', 'number']

			for (const field of requiredFieldsPhoneFields) {
				if (!httpRequest.body.phones.home_phone[field]) {
					return badRequest(new MissingParamError(`home_phone: ${field}`))
				}
				if (!httpRequest.body.phones.mobile_phone[field]) {
					return badRequest(new MissingParamError(`mobile_phone: ${field}`))
				}
			}

			const { document_type, type, gender } = httpRequest.body

			if (document_type !== 'CPF' || document_type !== 'CNPJ' || document_type !== 'PASSPORT') {
				return badRequest(new InvalidParamError('document_type'))
			}

			if (type !== 'individual' || type !== 'company') {
				return badRequest(new InvalidParamError('type'))
			}

			if (gender !== 'male' || gender !== 'female') {
				return badRequest(new InvalidParamError('gender'))
			}

			const client = await this.addClient.add(httpRequest.body)

			return success(client)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
