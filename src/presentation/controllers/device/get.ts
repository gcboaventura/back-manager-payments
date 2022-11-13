import { GetDeviceUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetDeviceController implements Controller {
	private readonly getDeviceUseCase: GetDeviceUseCase

	constructor(getDeviceUseCase: GetDeviceUseCase) {
		this.getDeviceUseCase = getDeviceUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			await this.getDeviceUseCase.get(httpRequest.params.id)

			return success()
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
