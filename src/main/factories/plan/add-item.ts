import { AddItemPlanData } from '@/data'
import { AddItemPlanController } from '@/presentation'
import { AddItemPlanMysql, AddItemPlanPagarme, AXIOS, connection } from '@/infra'
import { DateUtils } from '@/utils'

export const addItemPlanFactory = (): AddItemPlanController => {
	const addItemPlanGateway = new AddItemPlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addItemPlanRepository = new AddItemPlanMysql(connection, dateUtils)

	const addItemPlanUseCase = new AddItemPlanData(addItemPlanGateway, addItemPlanRepository)

	return new AddItemPlanController(addItemPlanUseCase)
}
