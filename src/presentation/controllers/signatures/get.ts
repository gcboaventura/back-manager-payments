import { GetSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetSignatureController implements Controller {
	private readonly getSignatureUseCase: GetSignatureUseCase

	constructor(getSignatureUseCase: GetSignatureUseCase) {
		this.getSignatureUseCase = getSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const plan = await this.getSignatureUseCase.get(id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
