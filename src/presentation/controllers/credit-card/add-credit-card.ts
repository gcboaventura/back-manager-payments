import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { CardValidator, Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddCreditCardController implements Controller {
	private readonly cardValidator: CardValidator

	constructor(cardValidator: CardValidator) {
		this.cardValidator = cardValidator
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields = ['name', 'number', 'cvv', 'validate']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const { number } = httpRequest.body

			const isValidCardNumber = await this.cardValidator.isValid(number)

			if (!isValidCardNumber) {
				return badRequest(new InvalidParamError('number'))
			}

			return success()
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
