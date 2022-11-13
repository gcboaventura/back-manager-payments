import { UpdateDeviceUseCase } from '../../../domain'
import { MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateDeviceController implements Controller {
	private readonly updateDeviceUseCase: UpdateDeviceUseCase

	constructor(updateDeviceUseCase: UpdateDeviceUseCase) {
		this.updateDeviceUseCase = updateDeviceUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredField: string[] = ['name', 'full_price']

			for (const field of requiredField) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			await this.updateDeviceUseCase.update(httpRequest.body, httpRequest.params.id)

			return success()
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
