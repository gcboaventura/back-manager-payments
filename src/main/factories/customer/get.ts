import { GetCustomerData } from '@/data'
import { GetCustomerController } from '@/presentation'
import { GetCustomerPagarme, AXIOS } from '@/infra'

export const getCustomerFactory = (): GetCustomerController => {
	const getCustomerGateway = new GetCustomerPagarme(AXIOS)

	const GetCustomerUseCase = new GetCustomerData(getCustomerGateway)

	return new GetCustomerController(GetCustomerUseCase)
}
