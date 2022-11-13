import { GetDeviceUseCase, DeviceModel } from '../../domain'
import { GetDeviceRepository } from '../protocols'

export class GetDeviceData implements GetDeviceUseCase {
	private readonly getDeviceRepository: GetDeviceRepository

	constructor(getDeviceRepository: GetDeviceRepository) {
		this.getDeviceRepository = getDeviceRepository
	}

	async get(id: number): Promise<DeviceModel> {
		const deviceDb = await this.getDeviceRepository.get(id)

		return deviceDb
	}
}
