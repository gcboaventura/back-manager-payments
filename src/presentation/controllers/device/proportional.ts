import { DeviceModel, GetDeviceProportionalValueUseCase } from '@/domain'
import { DateUtils } from '@/utils'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetDeviceProportionalValueController implements Controller {
	private readonly getDeviceProportionalValueUseCase: GetDeviceProportionalValueUseCase
	private readonly dateUtils: DateUtils

	constructor(
		getDeviceProportionalValueUseCase: GetDeviceProportionalValueUseCase,
		dateUtils: DateUtils
	) {
		this.getDeviceProportionalValueUseCase = getDeviceProportionalValueUseCase
		this.dateUtils = dateUtils
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const dataPackage = await this.getDeviceProportionalValueUseCase.get(httpRequest.params.id)

			const device: DeviceModel[] = JSON.parse(JSON.stringify(dataPackage))

			const valuePerDay = device[0].full_price / this.dateUtils.daysInMonth()

			const daysToEndOfMonth = this.dateUtils.daysToEndOfMonth()

			const proportionalValue = valuePerDay * daysToEndOfMonth

			return success({
				full_price: device[0].full_price,
				id: device[0].id,
				name: device[0].name,
				proportional_value: proportionalValue
			})
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
