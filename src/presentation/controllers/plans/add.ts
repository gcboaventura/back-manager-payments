import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddPlanController implements Controller {
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['name', 'billing_type']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			return success()
		} catch (error: unknown) {
			serverError(error as Error)
		}
	}
}
