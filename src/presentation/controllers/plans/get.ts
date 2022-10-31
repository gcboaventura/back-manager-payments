import { GetPlanUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetPlanController implements Controller {
	private readonly getPlanUseCase: GetPlanUseCase

	constructor(getPlanUseCase: GetPlanUseCase) {
		this.getPlanUseCase = getPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { id } = httpRequest.params

			const plan = await this.getPlanUseCase.get(id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
