import { AddOrderUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddOrderController implements Controller {
	private readonly addOrderUseCase: AddOrderUseCase

	constructor(addOrderUseCase: AddOrderUseCase) {
		this.addOrderUseCase = addOrderUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['customer_id', 'items', 'payments', 'closed']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const order = await this.addOrderUseCase.add(httpRequest.body)
			return success(order)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
