import { AddCustomerData, LoadCustomerByEmailData } from '../../../data'
import { AddCustomerController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import {
	AddCustomerMysql,
	AddCustomerPagarme,
	AXIOS,
	connection,
	LoadCustomerByEmailPagarme,
	AddAddressMysql
} from '../../../infra'

export const addCustomerFactory = (): AddCustomerController => {
	const loadCustomerByEmailGateway = new LoadCustomerByEmailPagarme(AXIOS)

	const loadCustomerByEmailData = new LoadCustomerByEmailData(loadCustomerByEmailGateway)

	const addCustomerGateway = new AddCustomerPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addCustomerRepository = new AddCustomerMysql(connection, dateUtils)

	const addAddressRepository = new AddAddressMysql(connection, dateUtils)

	const addCustomerUseCase = new AddCustomerData(
		addCustomerGateway,
		addCustomerRepository,
		addAddressRepository
	)

	return new AddCustomerController(loadCustomerByEmailData, addCustomerUseCase)
}
