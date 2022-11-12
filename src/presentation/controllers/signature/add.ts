import { AddSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddSignatureController implements Controller {
	private readonly addSignatureUseCase: AddSignatureUseCase

	constructor(addSignatureUseCase: AddSignatureUseCase) {
		this.addSignatureUseCase = addSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const signature = await this.addSignatureUseCase.add(httpRequest.body)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
