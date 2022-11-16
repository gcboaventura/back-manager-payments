import { GetSignatureUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetSignatureController implements Controller {
	private readonly getSignatureUseCase: GetSignatureUseCase

	constructor(getSignatureUseCase: GetSignatureUseCase) {
		this.getSignatureUseCase = getSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const signature = await this.getSignatureUseCase.get(httpRequest.params.id)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
