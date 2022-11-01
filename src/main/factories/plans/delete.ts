import { DeletePlanData } from '../../../data/plans'
import { DeletePlanPagarme } from '../../../infra/pagar-me/'
import { DeletePlanController } from '../../../presentation/controllers/plans'

export const DeletePlanFatory = (): DeletePlanController => {
	const deletePlanInfra = new DeletePlanPagarme()

	const deletePlanData = new DeletePlanData(deletePlanInfra)

	return new DeletePlanController(deletePlanData)
}
