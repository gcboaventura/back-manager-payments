import { DeleteDeviceUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteDeviceController implements Controller {
	private readonly deleteDeviceUseCase: DeleteDeviceUseCase

	constructor(deleteDeviceUseCase: DeleteDeviceUseCase) {
		this.deleteDeviceUseCase = deleteDeviceUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			await this.deleteDeviceUseCase.delete(httpRequest.params.id)

			return success()
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
