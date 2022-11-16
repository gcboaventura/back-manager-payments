import { AddAddressUseCase, GetCustomerUseCase } from '@/domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddAddressController implements Controller {
	private readonly addAddressUseCase: AddAddressUseCase
	private readonly getCustomerUseCase: GetCustomerUseCase

	constructor(addAddressUseCase: AddAddressUseCase, getCustomerUseCase: GetCustomerUseCase) {
		this.addAddressUseCase = addAddressUseCase
		this.getCustomerUseCase = getCustomerUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const customer = await this.getCustomerUseCase.get(httpRequest.params.id)

			if (customer.address) {
				return badRequest({
					message: 'Este usuário já possui endereço cadastrado.',
					name: 'badRequest'
				})
			}

			const requiredFields: string[] = ['country', 'state', 'city', 'zip_code', 'line_1', 'line_2']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const address = await this.addAddressUseCase.add(httpRequest.body, httpRequest.params.id)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
