import { UpdateCustomerUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateCustomerController implements Controller {
	private readonly updateCustomerUseCase: UpdateCustomerUseCase

	constructor(updateCustomerUseCase: UpdateCustomerUseCase) {
		this.updateCustomerUseCase = updateCustomerUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const customer = await this.updateCustomerUseCase.update(
				httpRequest.body,
				httpRequest.params.id
			)

			const requiredFields: string[] = [
				'name',
				'email',
				'document',
				'document_type',
				'type',
				'gender',
				'address',
				'phones',
				'birthdate'
			]

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			return success(customer)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
