import { AddOrderUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddOrderController implements Controller {
	private readonly addOrderUseCase: AddOrderUseCase

	constructor(addOrderUseCase: AddOrderUseCase) {
		this.addOrderUseCase = addOrderUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			console.log(httpRequest.body)

			const order = await this.addOrderUseCase.add(httpRequest.body)

			return success(order)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
