import { AddItemPlanUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddItemPlanController implements Controller {
	private readonly addItemPlanUseCase: AddItemPlanUseCase

	constructor(addItemPlanUseCase: AddItemPlanUseCase) {
		this.addItemPlanUseCase = addItemPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['name', 'quantity', 'description', 'pricing_scheme']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const itemPlan = await this.addItemPlanUseCase.add(httpRequest.params.id, httpRequest.body)

			return success(itemPlan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
