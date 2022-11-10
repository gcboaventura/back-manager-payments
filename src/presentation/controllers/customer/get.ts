import { GetCustomerUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetCustomerController implements Controller {
	private readonly getCustomerUseCase: GetCustomerUseCase

	constructor(getCustomerUseCase: GetCustomerUseCase) {
		this.getCustomerUseCase = getCustomerUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const customer = await this.getCustomerUseCase.get(id)

			return success(customer)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
