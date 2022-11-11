import { ListAddressData } from '../../../data'
import { ListAddressController } from '../../../presentation'
import { ListAddressPagarme, AXIOS } from '../../../infra'

export const listAddressFactory = (): ListAddressController => {
	const listAddressGateway = new ListAddressPagarme(AXIOS)

	const listAddressUseCase = new ListAddressData(listAddressGateway)

	return new ListAddressController(listAddressUseCase)
}
