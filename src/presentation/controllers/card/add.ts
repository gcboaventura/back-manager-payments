import { AddCardUseCase, ListCardsUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddCardController implements Controller {
	private readonly addCardUseCase: AddCardUseCase
	private readonly listCardsUseCase: ListCardsUseCase

	constructor(addCardUseCase: AddCardUseCase, listCardsUseCase: ListCardsUseCase) {
		this.addCardUseCase = addCardUseCase
		this.listCardsUseCase = listCardsUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const listCard = await this.listCardsUseCase.list(httpRequest.params.id)

			if (listCard.data.length > 0) {
				return badRequest({
					message: 'Este usuário já possui cartão cadastrado.',
					name: 'badRequest'
				})
			}

			const requiredField: string[] = [
				'number',
				'holder_name',
				'exp_month',
				'exp_year',
				'cvv',
				'brand'
			]

			for (const field of requiredField) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const card = await this.addCardUseCase.add(httpRequest.body, httpRequest.params.id)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
