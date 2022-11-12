import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addSignatureFactory, getSignatureFactory } from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))

	router.get('/subscriptions/:id', adaptRoute(getSignatureFactory()))
}
