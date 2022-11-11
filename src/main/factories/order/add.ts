import { AddOrderData } from '../../../data'
import { AddOrderController } from '../../../presentation'
import { AddOrderPagarme, AXIOS } from '../../../infra'

export const addOrderFactory = (): AddOrderController => {
	const addOrderGateway = new AddOrderPagarme(AXIOS)

	const addOrderUseCase = new AddOrderData(addOrderGateway)

	return new AddOrderController(addOrderUseCase)
}
