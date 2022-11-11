import { AddAddressData } from '../../../data'
import { AddAddressController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import { AddAddressMysql, AddAddressPagarme, AXIOS, connection } from '../../../infra'

export const addAddressFactory = (): AddAddressController => {
	const addAddressGateway = new AddAddressPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addAddressRepository = new AddAddressMysql(connection, dateUtils)

	const addAddressUseCase = new AddAddressData(addAddressGateway, addAddressRepository)

	return new AddAddressController(addAddressUseCase)
}
