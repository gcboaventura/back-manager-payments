import { GetBinUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetBinController implements Controller {
	private readonly getBinUseCase: GetBinUseCase

	constructor(getBinUseCase: GetBinUseCase) {
		this.getBinUseCase = getBinUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { bin } = httpRequest.params

			const binResponse = await this.getBinUseCase.get(bin)

			return success(binResponse)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
