import { ListSignaturesUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListSignaturesController implements Controller {
	private readonly listSignaturesUseCase: ListSignaturesUseCase

	constructor(listSignaturesUseCase: ListSignaturesUseCase) {
		this.listSignaturesUseCase = listSignaturesUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const signatureList = await this.listSignaturesUseCase.list(httpRequest.query)

			return success(signatureList)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
