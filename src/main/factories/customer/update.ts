import { UpdateCustomerController } from '../../../presentation'
import { AXIOS, connection, UpdateCustomerPagarme, UpdateCustomerMysql } from '../../../infra'
import { UpdateCustomerData } from '../../../data'

export const updateCustomerFactory = (): UpdateCustomerController => {
	const UpdateCustomerGateway = new UpdateCustomerPagarme(AXIOS)

	const updateCustomerRepository = new UpdateCustomerMysql(connection)

	const updateCustomerUseCase = new UpdateCustomerData(
		UpdateCustomerGateway,
		updateCustomerRepository
	)

	return new UpdateCustomerController(updateCustomerUseCase)
}
