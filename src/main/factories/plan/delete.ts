import { DeletePlanData } from '../../../data'
import { DeletePlanController } from '../../../presentation'
import { DeletePlanMysql, DeletePlanPagarme, AXIOS, connection } from '../../../infra'
import { DateUtils } from '../../../utils'

export const deletePlanFactory = (): DeletePlanController => {
	const deletePlanGateway = new DeletePlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const deletePlanRepository = new DeletePlanMysql(connection, dateUtils)

	const deletePlanUseCase = new DeletePlanData(deletePlanGateway, deletePlanRepository)

	return new DeletePlanController(deletePlanUseCase)
}
