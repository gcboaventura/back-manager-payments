import { DeleteAddressUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteAddressController implements Controller {
	private readonly deleteAddressUseCase: DeleteAddressUseCase

	constructor(deleteAddressUseCase: DeleteAddressUseCase) {
		this.deleteAddressUseCase = deleteAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idAddress } = httpRequest.params

			const address = await this.deleteAddressUseCase.delete(idCustomer, idAddress)

			return success(address)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
