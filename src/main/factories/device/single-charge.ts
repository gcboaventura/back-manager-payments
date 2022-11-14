import { AddOrderData, GetSignatureData } from '../../../data'
import { SingleChargeDeviceController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import {
	AddOrderMysql,
	AddOrderPagarme,
	AXIOS,
	connection,
	GetSignaturePagarme
} from '../../../infra'

export const sigleChargeDeviceFactory = (): SingleChargeDeviceController => {
	const dateUtils = new DateUtils()

	const getSignatureGateway = new GetSignaturePagarme(AXIOS)

	const getSignatureUseCase = new GetSignatureData(getSignatureGateway)

	const addOrderGateway = new AddOrderPagarme(AXIOS)

	const addOrderRepository = new AddOrderMysql(connection, dateUtils)

	const addOrderUseCase = new AddOrderData(addOrderGateway, addOrderRepository)

	return new SingleChargeDeviceController(getSignatureUseCase, addOrderUseCase)
}
