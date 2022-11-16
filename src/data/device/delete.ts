import { DeleteDeviceUseCase, DeviceModel } from '@/domain'
import { DeleteDeviceRepository } from '../protocols'

export class DeleteDeviceData implements DeleteDeviceUseCase {
	private readonly deleteDeviceRepository: DeleteDeviceRepository

	constructor(deleteDeviceRepository: DeleteDeviceRepository) {
		this.deleteDeviceRepository = deleteDeviceRepository
	}

	async delete(id: number): Promise<DeviceModel> {
		const deviceDb = await this.deleteDeviceRepository.delete(id)

		return deviceDb
	}
}
