import { UpdateDeviceUseCase, Device, DeviceModel } from '../../domain'
import { UpdateDeviceRepository } from '../protocols'

export class UpdateDeviceData implements UpdateDeviceUseCase {
	private readonly updateDeviceRepository: UpdateDeviceRepository

	constructor(updateDeviceRepository: UpdateDeviceRepository) {
		this.updateDeviceRepository = updateDeviceRepository
	}

	async update(device: Device, device_id: number): Promise<DeviceModel> {
		const deviceDb = await this.updateDeviceRepository.update(device, device_id)

		return deviceDb
	}
}
