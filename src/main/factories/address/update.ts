import { UpdateAddressData } from '../../../data'
import { UpdateAddressController } from '../../../presentation'
import { UpdateAddressMysql, UpdateAddressPagarme, AXIOS, connection } from '../../../infra'

export const updateAddressFactory = (): UpdateAddressController => {
	const updateAddressGateway = new UpdateAddressPagarme(AXIOS)

	const updateAddressRepository = new UpdateAddressMysql(connection)

	const updateAddressUseCase = new UpdateAddressData(updateAddressGateway, updateAddressRepository)

	return new UpdateAddressController(updateAddressUseCase)
}
