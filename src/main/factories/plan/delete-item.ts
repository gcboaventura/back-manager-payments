import { DeleteItemPlanData } from '@/data'
import { DeleteItemPlanController } from '@/presentation'
import { DeleteItemPlanMysql, DeleteItemPlanPagarme, AXIOS, connection } from '@/infra'
import { DateUtils } from '@/utils'

export const deleteItemPlanFactory = (): DeleteItemPlanController => {
	const deleteItemPlanGateway = new DeleteItemPlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const deleteItemPlanRepository = new DeleteItemPlanMysql(connection, dateUtils)

	const deleteItemPlanUseCase = new DeleteItemPlanData(
		deleteItemPlanGateway,
		deleteItemPlanRepository
	)

	return new DeleteItemPlanController(deleteItemPlanUseCase)
}
