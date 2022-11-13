import { DeleteDeviceData } from '../../../data'
import { DeleteDeviceController } from '../../../presentation'
import { DeleteDeviceMysql, connection } from '../../../infra'

export const deleteDeviceFactory = (): DeleteDeviceController => {
	const deleteDeviceRepository = new DeleteDeviceMysql(connection)

	const deleteDeviceUseCase = new DeleteDeviceData(deleteDeviceRepository)

	return new DeleteDeviceController(deleteDeviceUseCase)
}
