import { DeletePlanUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeletePlanController implements Controller {
	private readonly deletePlanUseCase: DeletePlanUseCase

	constructor(deletePlanUseCase: DeletePlanUseCase) {
		this.deletePlanUseCase = deletePlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const plan = await this.deletePlanUseCase.delete(id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
