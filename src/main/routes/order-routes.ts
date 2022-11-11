import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addOrderFactory } from '../factories'

export default (router: Router): void => {
	router.post('/orders', adaptRoute(addOrderFactory()))
}
