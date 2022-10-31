import { AddPlanUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddPlanController implements Controller {
	private readonly addPlanUseCase: AddPlanUseCase

	constructor(addPlanUseCase: AddPlanUseCase) {
		this.addPlanUseCase = addPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['name', 'billing_type']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const plan = await this.addPlanUseCase.add(httpRequest.body)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
