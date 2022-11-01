import { UpdatePlanData } from '../../../data/plans'
import { UpdatePlanPagarme } from '../../../infra/pagar-me'
import { UpdatePlanController } from '../../../presentation/controllers/plans'

export const updatePlanFatory = (): UpdatePlanController => {
	const updateInfra = new UpdatePlanPagarme()

	const updateData = new UpdatePlanData(updateInfra)

	return new UpdatePlanController(updateData)
}
