import { AddCustomerUseCase, LoadCustomerByEmailUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddCustomerController implements Controller {
	private readonly loadCustomerByEmailUseCase: LoadCustomerByEmailUseCase
	private readonly addCustomerUseCase: AddCustomerUseCase

	constructor(
		loadCustomerByEmailUseCase: LoadCustomerByEmailUseCase,
		addCustomerUseCase: AddCustomerUseCase
	) {
		this.loadCustomerByEmailUseCase = loadCustomerByEmailUseCase
		this.addCustomerUseCase = addCustomerUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { email } = httpRequest.body

			const customerExists = await this.loadCustomerByEmailUseCase.get(email)

			if (customerExists.data.length > 0) {
				return success(customerExists)
			}

			const requiredFields: string[] = [
				'name',
				'email',
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

			const customer = await this.addCustomerUseCase.add(httpRequest.body)

			return success(customer)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
