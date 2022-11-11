import { DeleteCardData } from '../../../data'
import { DeleteCardController } from '../../../presentation'
import { DeleteCardPagarme, AXIOS, DeleteCardMysql, connection } from '../../../infra'

export const deleteCardFactory = (): DeleteCardController => {
	const deleteCardGateway = new DeleteCardPagarme(AXIOS)

	const deleteCardRepository = new DeleteCardMysql(connection)

	const deleteCardUseCase = new DeleteCardData(deleteCardGateway, deleteCardRepository)

	return new DeleteCardController(deleteCardUseCase)
}
