import { GetAddressUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetAddressController implements Controller {
	private readonly getAddressUseCase: GetAddressUseCase

	constructor(getAddressUseCase: GetAddressUseCase) {
		this.getAddressUseCase = getAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idAddress } = httpRequest.params

			const address = await this.getAddressUseCase.get(idCustomer, idAddress)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
