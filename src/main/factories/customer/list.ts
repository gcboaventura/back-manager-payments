import { ListCustomersData } from '../../../data'
import { ListCustomersController } from '../../../presentation'
import { ListCustomersPagarme, AXIOS } from '../../../infra'

export const listCustomersFactory = (): ListCustomersController => {
	const listCustomersGateway = new ListCustomersPagarme(AXIOS)

	const listCustomersUseCase = new ListCustomersData(listCustomersGateway)

	return new ListCustomersController(listCustomersUseCase)
}
