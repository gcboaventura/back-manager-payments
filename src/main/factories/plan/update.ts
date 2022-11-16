import { UpdatePlanData } from '@/data'
import { UpdatePlanController } from '@/presentation'
import { UpdatePlanMysql, UpdatePlanPagarme, AXIOS, connection } from '@/infra'
import { DateUtils } from '@/utils'

export const updatePlanFactory = (): UpdatePlanController => {
	const updatePlanGateway = new UpdatePlanPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const updatePlanRepository = new UpdatePlanMysql(connection, dateUtils)

	const updatePlanUseCase = new UpdatePlanData(updatePlanGateway, updatePlanRepository)

	return new UpdatePlanController(updatePlanUseCase)
}
