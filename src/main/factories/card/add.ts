import { AddCardData } from '../../../data'
import { AddCardController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import { AddCardMysql, AddCardPagarme, AXIOS, connection, ListCardsPagarme } from '../../../infra'

export const addCardFactory = (): AddCardController => {
	const addCardGateway = new AddCardPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addCardRepository = new AddCardMysql(connection, dateUtils)

	const addCardUseCase = new AddCardData(addCardGateway, addCardRepository)

	const listCardsGateway = new ListCardsPagarme(AXIOS)

	return new AddCardController(addCardUseCase, listCardsGateway)
}
