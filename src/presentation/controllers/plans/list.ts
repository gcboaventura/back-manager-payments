import { ListPlansUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListPlansController implements Controller {
	private readonly listPlansUseCase: ListPlansUseCase

	constructor(listPlansUseCase: ListPlansUseCase) {
		this.listPlansUseCase = listPlansUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const list = await this.listPlansUseCase.get(httpRequest.query)

			return success(list)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
