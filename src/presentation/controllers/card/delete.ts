import { DeleteCardUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteCardController implements Controller {
	private readonly deleteCardUseCase: DeleteCardUseCase

	constructor(deleteCardUseCase: DeleteCardUseCase) {
		this.deleteCardUseCase = deleteCardUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idCard } = httpRequest.params

			const card = await this.deleteCardUseCase.delete(idCustomer, idCard)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
