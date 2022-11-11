import { UpdatePlanUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdatePlanController implements Controller {
	private readonly updatePlanUseCase: UpdatePlanUseCase

	constructor(updatePlanUseCase: UpdatePlanUseCase) {
		this.updatePlanUseCase = updatePlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const plan = await this.updatePlanUseCase.update(httpRequest.body, httpRequest.params.id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
