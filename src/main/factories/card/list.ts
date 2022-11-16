import { ListCardsData } from '@/data'
import { ListCardsController } from '@/presentation'
import { ListCardsPagarme, AXIOS } from '@/infra'

export const listCardsFactory = (): ListCardsController => {
	const listCardsGateway = new ListCardsPagarme(AXIOS)

	const listCardsUseCase = new ListCardsData(listCardsGateway)

	return new ListCardsController(listCardsUseCase)
}
