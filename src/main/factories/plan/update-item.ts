import { UpdateItemPlanData } from '../../../data'
import { UpdateItemPlanController } from '../../../presentation'
import { UpdateItemPlanMysql, UpdateItemPlanPagarme, AXIOS, connection } from '../../../infra'
import { DateUtils } from '../../../utils'

export const updateItemPlanFactory = (): UpdateItemPlanController => {
	const updateItemPlanGateway = new UpdateItemPlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const updateItemPlanRepository = new UpdateItemPlanMysql(connection, dateUtils)

	const updateItemPlanUseCase = new UpdateItemPlanData(
		updateItemPlanGateway,
		updateItemPlanRepository
	)

	return new UpdateItemPlanController(updateItemPlanUseCase)
}
