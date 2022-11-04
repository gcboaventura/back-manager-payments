import { ListSignaturesUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListSignatureController implements Controller {
	private readonly listSignatureUseCase: ListSignaturesUseCase

	constructor(listSignatureUseCase: ListSignaturesUseCase) {
		this.listSignatureUseCase = listSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const signature = await this.listSignatureUseCase.list(httpRequest.query)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
