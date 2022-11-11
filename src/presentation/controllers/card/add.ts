import { AddCardUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddCardController implements Controller {
	private readonly addCardUseCase: AddCardUseCase

	constructor(addCardUseCase: AddCardUseCase) {
		this.addCardUseCase = addCardUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const card = await this.addCardUseCase.add(httpRequest.body)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
