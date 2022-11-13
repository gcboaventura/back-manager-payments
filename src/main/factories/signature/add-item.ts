import { AddItemSignatureData, AddOrderData, GetSignatureData } from '../../../data'
import { AddItemSignatureController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import {
	AddItemSignaturePagarme,
	AddItemsSignatureMysql,
	AddOrderMysql,
	AddOrderPagarme,
	AXIOS,
	connection,
	GetSignaturePagarme
} from '../../../infra'

export const AddItemSignatureFactory = (): AddItemSignatureController => {
	const addItemSignatureGateway = new AddItemSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addItemsSignatureRepository = new AddItemsSignatureMysql(connection, dateUtils)

	const getSignatureGateway = new GetSignaturePagarme(AXIOS)

	const getSignatureData = new GetSignatureData(getSignatureGateway)

	const addOrderGateway = new AddOrderPagarme(AXIOS)

	const addOrderRepository = new AddOrderMysql(connection, dateUtils)

	const addOrderData = new AddOrderData(addOrderGateway, addOrderRepository)

	const addItemSignatureUseCase = new AddItemSignatureData(
		addItemSignatureGateway,
		addItemsSignatureRepository
	)

	return new AddItemSignatureController(addItemSignatureUseCase, getSignatureData, addOrderData)
}
