import { UpdateDeviceData } from '../../../data'
import { UpdateDeviceController } from '../../../presentation'
import { UpdateDeviceMysql, connection } from '../../../infra'

export const updateDeviceFactory = (): UpdateDeviceController => {
	const updateDeviceRepository = new UpdateDeviceMysql(connection)

	const updateDeviceUseCase = new UpdateDeviceData(updateDeviceRepository)

	return new UpdateDeviceController(updateDeviceUseCase)
}
