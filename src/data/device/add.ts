import { AddDeviceUseCase, Device, DeviceModel } from '@/domain'
import { AddDeviceRepository } from '../protocols'

export class AddDeviceData implements AddDeviceUseCase {
	private readonly addDeviceRepository: AddDeviceRepository

	constructor(addDeviceRepository: AddDeviceRepository) {
		this.addDeviceRepository = addDeviceRepository
	}

	async add(device: Device): Promise<DeviceModel> {
		const deviceDb = await this.addDeviceRepository.add(device)

		return deviceDb
	}
}
