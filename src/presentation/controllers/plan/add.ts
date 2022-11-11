import { AddPlanUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddPlanController implements Controller {
	private readonly addPlanUseCase: AddPlanUseCase

	constructor(addPlanUseCase: AddPlanUseCase) {
		this.addPlanUseCase = addPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const plan = await this.addPlanUseCase.add(httpRequest.body)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
