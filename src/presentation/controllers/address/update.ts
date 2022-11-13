import { UpdateAddressUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateAddressController implements Controller {
	private readonly updateAddressUseCase: UpdateAddressUseCase

	constructor(updateAddressUseCase: UpdateAddressUseCase) {
		this.updateAddressUseCase = updateAddressUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idAddress } = httpRequest.params

			const requiredFields: string[] = ['line_2']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

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
