import { UpdateCustomerUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateCustomerController implements Controller {
	private readonly updateCustomerUseCase: UpdateCustomerUseCase

	constructor(updateCustomerUseCase: UpdateCustomerUseCase) {
		this.updateCustomerUseCase = updateCustomerUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const customer = await this.updateCustomerUseCase.update(
				httpRequest.body,
				httpRequest.params.id
			)

			return success(customer)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
