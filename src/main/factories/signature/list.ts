import { ListSignaturesData } from '../../../data'
import { ListSignaturesController } from '../../../presentation'
import { ListSignaturesPagarme, AXIOS } from '../../../infra'
import { RequestUtils } from '../../../utils'

export const listSignaturesFactory = (): ListSignaturesController => {
	const requestUtils = new RequestUtils()

	const listSignaturesGateway = new ListSignaturesPagarme(AXIOS, requestUtils)

	const listSignaturesUseCase = new ListSignaturesData(listSignaturesGateway)

	return new ListSignaturesController(listSignaturesUseCase)
}
