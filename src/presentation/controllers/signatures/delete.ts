import { DeleteSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteSignatureController implements Controller {
	private readonly deleteSignatureUseCase: DeleteSignatureUseCase

	constructor(deleteSignatureUseCase: DeleteSignatureUseCase) {
		this.deleteSignatureUseCase = deleteSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const signature = await this.deleteSignatureUseCase.delete(id)

			return success(signature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
