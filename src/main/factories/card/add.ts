import { AddCardData, ListCardsData } from '../../../data'
import { AddCardController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import { AddCardMysql, AddCardPagarme, AXIOS, connection, ListCardsPagarme } from '../../../infra'

export const addCardFactory = (): AddCardController => {
	const addCardGateway = new AddCardPagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addCardRepository = new AddCardMysql(connection, dateUtils)

	const addCardUseCase = new AddCardData(addCardGateway, addCardRepository)

	const listCardsGateway = new ListCardsPagarme(AXIOS)

	const listCardsUseCase = new ListCardsData(listCardsGateway)

	return new AddCardController(addCardUseCase, listCardsUseCase)
}
