import { DeleteItemSignatureUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteItemSignatureController implements Controller {
	private readonly deleteItemSignatureUseCase: DeleteItemSignatureUseCase

	constructor(deleteItemSignatureUseCase: DeleteItemSignatureUseCase) {
		this.deleteItemSignatureUseCase = deleteItemSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idSubscription, idItem } = httpRequest.params

			const itemSignature = await this.deleteItemSignatureUseCase.delete(idSubscription, idItem)

			return success(itemSignature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
