import { DeleteAddressData } from '../../../data'
import { DeleteAddressController } from '../../../presentation'
import { DeleteAddressMysql, DeleteAddressPagarme, AXIOS, connection } from '../../../infra'

export const deleteAddressFactory = (): DeleteAddressController => {
	const deleteAddressGateway = new DeleteAddressPagarme(AXIOS)

	const deleteAddressRepository = new DeleteAddressMysql(connection)

	const deleteAddressUseCase = new DeleteAddressData(deleteAddressGateway, deleteAddressRepository)

	return new DeleteAddressController(deleteAddressUseCase)
}
