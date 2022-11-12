import { DeleteItemPlanUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteItemPlanController implements Controller {
	private readonly deleteItemPlanUseCase: DeleteItemPlanUseCase

	constructor(deleteItemPlanUseCase: DeleteItemPlanUseCase) {
		this.deleteItemPlanUseCase = deleteItemPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idPlan, idItem } = httpRequest.params

			const itemPlan = await this.deleteItemPlanUseCase.delete(idPlan, idItem)

			return success(itemPlan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
