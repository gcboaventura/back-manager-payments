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
				'payment_methods',
				'installments',
				'minimum_price',
				'statement_descriptor',
				'currency',
				'interval',
				'trial_period_days',
				'billing_type',
				'items'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const plan = await this.updatePlanUseCase.update(httpRequest.body, httpRequest.params.id)

			return success(plan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
