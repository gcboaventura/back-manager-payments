import { ListPlansData } from '../../../data'
import { ListPlansController } from '../../../presentation'
import { ListPlansPagarme, AXIOS } from '../../../infra'
import { RequestUtils } from '../../../utils'

export const listPlansFactory = (): ListPlansController => {
	const requestUtils = new RequestUtils()

	const listPlansGateway = new ListPlansPagarme(AXIOS, requestUtils)

	const listPlansUseCase = new ListPlansData(listPlansGateway)

	return new ListPlansController(listPlansUseCase)
}
