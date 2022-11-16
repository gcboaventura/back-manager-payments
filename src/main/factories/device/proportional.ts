import { GetDeviceData } from '@/data'
import { GetDeviceProportionalValueController } from '@/presentation'
import { GetDeviceMysql, connection } from '@/infra'
import { DateUtils } from '@/utils'

export const getDeviceProportionalValueFactory = (): GetDeviceProportionalValueController => {
	const getDeviceRepository = new GetDeviceMysql(connection)

	const getDeviceUseCase = new GetDeviceData(getDeviceRepository)

	const dateUtils = new DateUtils()

	return new GetDeviceProportionalValueController(getDeviceUseCase, dateUtils)
}
