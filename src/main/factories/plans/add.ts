import { AddPlanData } from '../../../data/plans'
import { AddPlanPagarme } from '../../../infra/pagar-me'
import { AddPlanController } from '../../../presentation/controllers/plans'

export const addPlanFatory = (): AddPlanController => {
	const addPlanInfra = new AddPlanPagarme()

	const addPlanData = new AddPlanData(addPlanInfra)

	return new AddPlanController(addPlanData)
}
