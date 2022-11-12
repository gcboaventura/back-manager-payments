import { DeleteCardData } from '../../../data'
import { DeleteCardController } from '../../../presentation'
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

	const ligSignatureGateway = new ListSignaturesPagarme(AXIOS)

	return new DeleteCardController(deleteCardUseCase, ligSignatureGateway)
}
