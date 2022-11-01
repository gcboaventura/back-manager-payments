import { ListPlanData } from '../../../data/plans'
import { ListPlanPagarme } from '../../../infra/pagar-me/plans/list'
import { ListPlansController } from '../../../presentation/controllers/plans'

export const listPlanFatory = (): ListPlansController => {
	const listPlanInfra = new ListPlanPagarme()

	const listPlanData = new ListPlanData(listPlanInfra)

	return new ListPlansController(listPlanData)
}
