import { CancelSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class CancelSignatureController implements Controller {
	private readonly cancelSignatureUseCase: CancelSignatureUseCase

	constructor(cancelSignatureUseCase: CancelSignatureUseCase) {
		this.cancelSignatureUseCase = cancelSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const signature = await this.cancelSignatureUseCase.cancel(id)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
