import { GetDeviceData } from '@/data'
import { GetDeviceController } from '@/presentation'
import { GetDeviceMysql, connection } from '@/infra'

export const getDeviceFactory = (): GetDeviceController => {
	const getDeviceRepository = new GetDeviceMysql(connection)

	const getDeviceUseCase = new GetDeviceData(getDeviceRepository)

	return new GetDeviceController(getDeviceUseCase)
}
