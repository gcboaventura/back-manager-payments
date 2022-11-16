import { GetPlanUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetPlanController implements Controller {
	private readonly getPlanUseCase: GetPlanUseCase

	constructor(getPlanUseCase: GetPlanUseCase) {
		this.getPlanUseCase = getPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const plan = await this.getPlanUseCase.get(httpRequest.params.id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
