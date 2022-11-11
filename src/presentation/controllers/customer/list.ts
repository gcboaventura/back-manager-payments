import { ListCustomersUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListCustomersController implements Controller {
	private readonly listCustomersUseCase: ListCustomersUseCase

	constructor(listCustomersUseCase: ListCustomersUseCase) {
		this.listCustomersUseCase = listCustomersUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const customersList = await this.listCustomersUseCase.list(httpRequest.query)

			return success(customersList)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
