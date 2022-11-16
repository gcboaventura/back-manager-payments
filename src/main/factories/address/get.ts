import { GetAddressData } from '@/data'
import { GetAddressController } from '@/presentation'
import { GetAddressPagarme, AXIOS } from '@/infra'

export const getAddressFactory = (): GetAddressController => {
	const getAddressGateway = new GetAddressPagarme(AXIOS)

	const getAddressUseCase = new GetAddressData(getAddressGateway)

	return new GetAddressController(getAddressUseCase)
}
