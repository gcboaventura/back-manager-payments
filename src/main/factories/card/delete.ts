import { DeleteCardData } from '../../../data'
import { DeleteCardController } from '../../../presentation'
import { RequestUtils } from '../../../utils'
import {
	DeleteCardPagarme,
	AXIOS,
	DeleteCardMysql,
	connection,
	ListSignaturesPagarme
} from '../../../infra'

export const deleteCardFactory = (): DeleteCardController => {
	const deleteCardGateway = new DeleteCardPagarme(AXIOS)

	const deleteCardRepository = new DeleteCardMysql(connection)

	const deleteCardUseCase = new DeleteCardData(deleteCardGateway, deleteCardRepository)

	const requestUtils = new RequestUtils()

	const listSignatureGateway = new ListSignaturesPagarme(AXIOS, requestUtils)

	return new DeleteCardController(deleteCardUseCase, listSignatureGateway)
}
