import { GetCustomerGateway } from '../../../data'
import { AddAddressUseCase } from '../../../domain'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddAddressController implements Controller {
	private readonly addAddressUseCase: AddAddressUseCase
	private readonly getCustomerRepository: GetCustomerGateway

	constructor(addAddressUseCase: AddAddressUseCase, getCustomerRepository: GetCustomerGateway) {
		this.addAddressUseCase = addAddressUseCase
		this.getCustomerRepository = getCustomerRepository
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const customer = await this.getCustomerRepository.get(httpRequest.params.id)

			if (customer.address) {
				return badRequest({
					message: 'Este usuário já possui endereço cadastrado.',
					name: 'badRequest'
				})
			}

			const address = await this.addAddressUseCase.add(httpRequest.body, httpRequest.params.id)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
