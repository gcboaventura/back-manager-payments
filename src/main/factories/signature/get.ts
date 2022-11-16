import { GetSignatureData } from '@/data'
import { GetSignatureController } from '@/presentation'
import { GetSignaturePagarme, AXIOS } from '@/infra'

export const getSignatureFactory = (): GetSignatureController => {
	const getSignatureGateway = new GetSignaturePagarme(AXIOS)

	const getSignatureUseCase = new GetSignatureData(getSignatureGateway)

	return new GetSignatureController(getSignatureUseCase)
}
