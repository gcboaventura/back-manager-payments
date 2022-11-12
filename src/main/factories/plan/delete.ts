import { DateUtils } from '../../../utils'
import { DeletePlanData } from '../../../data'
import { DeletePlanController } from '../../../presentation'
import {
	DeletePlanMysql,
	DeletePlanPagarme,
	AXIOS,
	connection,
	DeleteItemPlanMysql,
	GetPlanPagarme
} from '../../../infra'

export const deletePlanFactory = (): DeletePlanController => {
	const deletePlanGateway = new DeletePlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const deletePlanRepository = new DeletePlanMysql(connection, dateUtils)

	const getPlanGateway = new GetPlanPagarme(AXIOS)

	const deleteItemsPlanRepository = new DeleteItemPlanMysql(connection, dateUtils)

	const deletePlanUseCase = new DeletePlanData(
		deletePlanGateway,
		deletePlanRepository,
		getPlanGateway,
		deleteItemsPlanRepository
	)

	return new DeletePlanController(deletePlanUseCase)
}
