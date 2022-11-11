import { AddPlanData } from '../../../data'
import { AddPlanController } from '../../../presentation'
import { AddPlanMysql, AddPlanPagarme, AXIOS, connection } from '../../../infra'
import { DateUtils } from '../../../utils'

export const addPlanFactory = (): AddPlanController => {
	const addPlanGateway = new AddPlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addPlanRepository = new AddPlanMysql(connection, dateUtils)

	const addPlanUseCase = new AddPlanData(addPlanGateway, addPlanRepository)

	return new AddPlanController(addPlanUseCase)
}
