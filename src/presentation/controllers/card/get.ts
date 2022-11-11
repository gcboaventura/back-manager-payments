import { GetCardUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetCardController implements Controller {
	private readonly GetCardUseCase: GetCardUseCase

	constructor(GetCardUseCase: GetCardUseCase) {
		this.GetCardUseCase = GetCardUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idCard } = httpRequest.params

			const card = await this.GetCardUseCase.get(idCustomer, idCard)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
