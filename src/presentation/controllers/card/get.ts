import { GetCardUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetCardController implements Controller {
	private readonly getCardUseCase: GetCardUseCase

	constructor(getCardUseCase: GetCardUseCase) {
		this.getCardUseCase = getCardUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idCard } = httpRequest.params

			const card = await this.getCardUseCase.get(idCustomer, idCard)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
