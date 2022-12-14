import { AddItemSignatureUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddItemSignatureController implements Controller {
	private readonly addItemSignatureUseCase: AddItemSignatureUseCase

	constructor(addItemSignatureUseCase: AddItemSignatureUseCase) {
		this.addItemSignatureUseCase = addItemSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['name', 'quantity', 'description', 'pricing_scheme']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const itemSignature = await this.addItemSignatureUseCase.add(
				httpRequest.params.id,
				httpRequest.body
			)
			return success(itemSignature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
