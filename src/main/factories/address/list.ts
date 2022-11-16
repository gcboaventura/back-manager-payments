import { ListAddressData } from '@/data'
import { ListAddressController } from '@/presentation'
import { ListAddressPagarme, AXIOS } from '@/infra'
import { RequestUtils } from '@/utils'

export const listAddressFactory = (): ListAddressController => {
	const requestUtils = new RequestUtils()

	const listAddressGateway = new ListAddressPagarme(AXIOS, requestUtils)

	const listAddressUseCase = new ListAddressData(listAddressGateway)

	return new ListAddressController(listAddressUseCase)
}
