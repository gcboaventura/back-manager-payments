import { ListCardsGateway } from '../../../data'
import { AddCardUseCase } from '../../../domain'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddCardController implements Controller {
	private readonly addCardUseCase: AddCardUseCase
	private readonly listCardsGateway: ListCardsGateway

	constructor(addCardUseCase: AddCardUseCase, listCardsGateway: ListCardsGateway) {
		this.addCardUseCase = addCardUseCase
		this.listCardsGateway = listCardsGateway
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const listCard = await this.listCardsGateway.list(httpRequest.params.id)

			if (listCard.data.length > 0) {
				return badRequest({
					message: 'Este usuário já possui cartão cadastrado.',
					name: 'badRequest'
				})
			}

			const card = await this.addCardUseCase.add(httpRequest.body, httpRequest.params.id)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
