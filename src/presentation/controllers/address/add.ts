import { AddAddressUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddAddressController implements Controller {
	private readonly addAddressUseCase: AddAddressUseCase

	constructor(addAddressUseCase: AddAddressUseCase) {
		this.addAddressUseCase = addAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const address = await this.addAddressUseCase.add(httpRequest.body, httpRequest.params.id)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
