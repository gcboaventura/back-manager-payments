import { ListSignaturesData } from '../../../data'
import { ListSignaturesController } from '../../../presentation'
import { ListSignaturesPagarme, AXIOS } from '../../../infra'

export const listSignaturesFactory = (): ListSignaturesController => {
	const listSignaturesGateway = new ListSignaturesPagarme(AXIOS)

	const listSignaturesUseCase = new ListSignaturesData(listSignaturesGateway)

	return new ListSignaturesController(listSignaturesUseCase)
}
