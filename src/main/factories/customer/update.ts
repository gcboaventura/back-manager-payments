import { UpdateCustomerController } from '../../../presentation'
import { AXIOS, connection, UpdateCustomerPagarme, UpdateCustomerMysql } from '../../../infra'
import { UpdateCustomerData } from '../../../data'
import { DateUtils } from '../../../utils'

export const updateCustomerFactory = (): UpdateCustomerController => {
	const UpdateCustomerGateway = new UpdateCustomerPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const updateCustomerRepository = new UpdateCustomerMysql(connection, dateUtils)

	const updateCustomerUseCase = new UpdateCustomerData(
		UpdateCustomerGateway,
		updateCustomerRepository
	)

	return new UpdateCustomerController(updateCustomerUseCase)
}
