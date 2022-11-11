import { UpdateCardUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateCardController implements Controller {
	private readonly updateCardUseCase: UpdateCardUseCase

	constructor(updateCardUseCase: UpdateCardUseCase) {
		this.updateCardUseCase = updateCardUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idCard } = httpRequest.params

			const card = await this.updateCardUseCase.update(idCustomer, idCard, httpRequest.body)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
