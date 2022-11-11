import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCardFactory, getCardFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers/:id/cards', adaptRoute(addCardFactory()))

	router.get('/customers/:idCustomer/cards/:idCard', adaptRoute(getCardFactory()))
}
