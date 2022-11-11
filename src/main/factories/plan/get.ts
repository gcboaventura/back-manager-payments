import { GetPlanData } from '../../../data'
import { GetPlanController } from '../../../presentation'
import { GetPlanPagarme, AXIOS } from '../../../infra'

export const getPlanFactory = (): GetPlanController => {
	const getPlanGateway = new GetPlanPagarme(AXIOS)

	const getPlanUseCase = new GetPlanData(getPlanGateway)

	return new GetPlanController(getPlanUseCase)
}
