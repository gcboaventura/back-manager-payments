import { AddDeviceUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddDeviceController implements Controller {
	private readonly addDeviceUseCase: AddDeviceUseCase

	constructor(addDeviceUseCase: AddDeviceUseCase) {
		this.addDeviceUseCase = addDeviceUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredField: string[] = ['name', 'full_price']

			for (const field of requiredField) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const device = await this.addDeviceUseCase.add(httpRequest.body)

			return success(device)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
