import { UpdatePlanUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdatePlanController implements Controller {
	private readonly updatePlanUseCase: UpdatePlanUseCase

	constructor(updatePlanUseCase: UpdatePlanUseCase) {
		this.updatePlanUseCase = updatePlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = [
				'name',
				'description',
				'items',
				'interval',
				'interval_count',
				'payment_methods',
				'start_at',
				'billing_type',
				'installments',
				'cycles',
				'status'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const plan = await this.updatePlanUseCase.update(httpRequest.body)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
