import { AddDeviceData } from '../../../data'
import { AddDeviceController } from '../../../presentation'
import { AddDeviceMysql, AXIOS, connection } from '../../../infra'

export const addDeviceFactory = (): AddDeviceController => {
	const addDeviceRepository = new AddDeviceMysql(connection)

	const addDeviceUseCase = new AddDeviceData(addDeviceRepository)

	return new AddDeviceController(addDeviceUseCase)
}
