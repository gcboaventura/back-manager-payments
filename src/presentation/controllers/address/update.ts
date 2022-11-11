import { UpdateAddressUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateAddressController implements Controller {
	private readonly updateAddressUseCase: UpdateAddressUseCase

	constructor(updateAddressUseCase: UpdateAddressUseCase) {
		this.updateAddressUseCase = updateAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idAddress } = httpRequest.params

			const address = await this.updateAddressUseCase.update(
				httpRequest.body,
				idCustomer,
				idAddress
			)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
