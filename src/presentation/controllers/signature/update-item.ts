import { UpdateItemSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateItemSignatureController implements Controller {
	private readonly updateItemSignatureUseCase: UpdateItemSignatureUseCase

	constructor(updateItemSignatureUseCase: UpdateItemSignatureUseCase) {
		this.updateItemSignatureUseCase = updateItemSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idSubscription, idItem } = httpRequest.params

			const itemSignature = await this.updateItemSignatureUseCase.update(
				idSubscription,
				idItem,
				httpRequest.body
			)

			return success(itemSignature)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
