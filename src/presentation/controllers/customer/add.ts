import { AddCustomerUseCase, LoadCustomerByEmailUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
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

			const customer = await this.addCustomerUseCase.add(httpRequest.body)

			return success(customer)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
