import { UpdateItemPlanUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateItemPlanController implements Controller {
	private readonly updateItemPlanUseCase: UpdateItemPlanUseCase

	constructor(updateItemPlanUseCase: UpdateItemPlanUseCase) {
		this.updateItemPlanUseCase = updateItemPlanUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idPlan, idItem } = httpRequest.params

			const requiredFields: string[] = ['name', 'quantity', 'description', 'pricing_scheme']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const itemPlan = await this.updateItemPlanUseCase.update(idPlan, idItem, httpRequest.body)

			return success(itemPlan)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
