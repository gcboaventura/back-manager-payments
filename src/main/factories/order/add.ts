import { AddOrderData } from '@/data'
import { AddOrderController } from '@/presentation'
import { AddOrderMysql, AddOrderPagarme, AXIOS, connection } from '@/infra'
import { DateUtils } from '@/utils'

export const addOrderFactory = (): AddOrderController => {
	const addOrderGateway = new AddOrderPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addOrderRepository = new AddOrderMysql(connection, dateUtils)

	const addOrderUseCase = new AddOrderData(addOrderGateway, addOrderRepository)

	return new AddOrderController(addOrderUseCase)
}
