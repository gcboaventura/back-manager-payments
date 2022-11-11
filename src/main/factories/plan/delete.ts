import { DeletePlanData } from '../../../data'
import { DeletePlanController } from '../../../presentation'
import { DeletePlanMysql, DeletePlanPagarme, AXIOS, connection } from '../../../infra'

export const deletePlanFactory = (): DeletePlanController => {
	const deletePlanGateway = new DeletePlanPagarme(AXIOS)

	const deletePlanRepository = new DeletePlanMysql(connection)

	const deletePlanUseCase = new DeletePlanData(deletePlanGateway, deletePlanRepository)

	return new DeletePlanController(deletePlanUseCase)
}
