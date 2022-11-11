import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCardFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers/:id/cards', adaptRoute(addCardFactory()))
}
