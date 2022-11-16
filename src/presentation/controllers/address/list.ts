import { ListAddressUseCase } from '@/domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ListAddressController implements Controller {
	private readonly listAddressUseCase: ListAddressUseCase

	constructor(listAddressUseCase: ListAddressUseCase) {
		this.listAddressUseCase = listAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const addressList = await this.listAddressUseCase.list(
				httpRequest.query,
				httpRequest.params.id
			)

			return success(addressList)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
