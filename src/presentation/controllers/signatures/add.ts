import { AddSignatureUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddSignatureController implements Controller {
	private readonly addSignatureUseCase: AddSignatureUseCase

	constructor(addSignatureUseCase: AddSignatureUseCase) {
		this.addSignatureUseCase = addSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = [
				'plan_id',
				'payment_method',
				'customer',
				'card',
				'installments',
				'start_at'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const signature = await this.addSignatureUseCase.add(httpRequest.body)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
