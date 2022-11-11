import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCardFactory, getCardFactory, listCardsFactory, updateCardFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers/:id/cards', adaptRoute(addCardFactory()))

	router.get('/customers/:idCustomer/cards/:idCard', adaptRoute(getCardFactory()))

	router.get('/customers/:id/cards', adaptRoute(listCardsFactory()))

	router.put('/customers/:idCustomer/cards/:idCard', adaptRoute(updateCardFactory()))
}
