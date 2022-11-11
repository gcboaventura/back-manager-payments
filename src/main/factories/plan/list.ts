import { ListPlansData } from '../../../data'
import { ListPlansController } from '../../../presentation'
import { ListPlansPagarme, AXIOS } from '../../../infra'

export const listPlansFactory = (): ListPlansController => {
	const listPlansGateway = new ListPlansPagarme(AXIOS)

	const listPlansUseCase = new ListPlansData(listPlansGateway)

	return new ListPlansController(listPlansUseCase)
}
