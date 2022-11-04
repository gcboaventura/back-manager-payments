import { UpdateCardSignatureUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateCardSignatureController implements Controller {
	private readonly updateCardSignatureUseCase: UpdateCardSignatureUseCase

	constructor(updateCardSignatureUseCase: UpdateCardSignatureUseCase) {
		this.updateCardSignatureUseCase = updateCardSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = [
				'number',
				'holder_name',
				'exp_month',
				'exp_year',
				'cvv',
				'card_id',
				'billing_address'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const signature = await this.updateCardSignatureUseCase.update(
				httpRequest.body,
				httpRequest.params.id
			)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
