import { ListCardsUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListCardsController implements Controller {
	private readonly listCardsUseCase: ListCardsUseCase

	constructor(listCardsUseCase: ListCardsUseCase) {
		this.listCardsUseCase = listCardsUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const cardList = await this.listCardsUseCase.list(id)

			return success(cardList)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
