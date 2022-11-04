import { GetSignatureUseCase, UpdateStartDateSignatureUseCase } from '../../../domain'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, DateValidator, HttpRequest, HttpResponse } from '../../protocols'

export class UpdateStartDateSignatureController implements Controller {
	private readonly updateStartDateSignatureUseCase: UpdateStartDateSignatureUseCase
	private readonly getSignature: GetSignatureUseCase
	private readonly dateValidator: DateValidator

	constructor(
		updateStartDateSignatureUseCase: UpdateStartDateSignatureUseCase,
		getSignature: GetSignatureUseCase,
		dateValidator: DateValidator
	) {
		this.updateStartDateSignatureUseCase = updateStartDateSignatureUseCase
		this.getSignature = getSignature
		this.dateValidator = dateValidator
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const requiredFields: string[] = ['start_at']

			for (const field of requiredFields) {
				if (!httpRequest.body[field]) {
					return badRequest(new MissingParamError(field))
				}
			}

			const signature = await this.getSignature.get(httpRequest.params.id)

			const differenceBetweenDates = this.dateValidator.diff(signature.start_at, new Date())

			if (differenceBetweenDates < 0) {
				return badRequest(new InvalidParamError('data inválida'))
			}

			const updateStartAt = await this.updateStartDateSignatureUseCase.update(
				httpRequest.body,
				httpRequest.params.id
			)

			return success(updateStartAt)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
