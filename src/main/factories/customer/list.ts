import { ListCustomersData } from '../../../data'
import { ListCustomersController } from '../../../presentation'
import { ListCustomersPagarme, AXIOS } from '../../../infra'
import { RequestUtils } from '../../../utils'

export const listCustomersFactory = (): ListCustomersController => {
	const requestUtils = new RequestUtils()

	const listCustomersGateway = new ListCustomersPagarme(AXIOS, requestUtils)

	const listCustomersUseCase = new ListCustomersData(listCustomersGateway)

	return new ListCustomersController(listCustomersUseCase)
}
