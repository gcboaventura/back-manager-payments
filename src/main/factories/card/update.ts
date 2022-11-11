import { UpdateCardData } from '../../../data'
import { UpdateCardController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import { UpdateCardMysql, UpdateCardPagarme, AXIOS, connection } from '../../../infra'

export const updateCardFactory = (): UpdateCardController => {
	const updateCardGateway = new UpdateCardPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const updateCardRepository = new UpdateCardMysql(connection, dateUtils)

	const updateCardUseCase = new UpdateCardData(updateCardGateway, updateCardRepository)

	return new UpdateCardController(updateCardUseCase)
}
