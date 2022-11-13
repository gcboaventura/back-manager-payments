import { ListItemsSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListItemsSignatureController implements Controller {
	private readonly listItemsSignatureUseCase: ListItemsSignatureUseCase

	constructor(listItemsSignatureUseCase: ListItemsSignatureUseCase) {
		this.listItemsSignatureUseCase = listItemsSignatureUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const itemsList = await this.listItemsSignatureUseCase.list(
				httpRequest.params.id,
				httpRequest.query
			)

			return success(itemsList)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
