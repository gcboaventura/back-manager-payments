import { GetCardData } from '../../../data'
import { GetCardController } from '../../../presentation'
import { GetCardPagarme, AXIOS } from '../../../infra'

export const getCardFactory = (): GetCardController => {
	const getCardGateway = new GetCardPagarme(AXIOS)

	const getCardUseCase = new GetCardData(getCardGateway)

	return new GetCardController(getCardUseCase)
}
