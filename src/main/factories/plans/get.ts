import { GetPlanData } from '../../../data/plans/get'
import { GetPlanPagarme } from '../../../infra/pagar-me/'
import { GetPlanController } from '../../../presentation/controllers/plans'

export const getPlanFatory = (): GetPlanController => {
	const getPlanInfra = new GetPlanPagarme()

	const getPlanData = new GetPlanData(getPlanInfra)

	return new GetPlanController(getPlanData)
}
