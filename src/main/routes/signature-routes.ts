import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addSignatureFactory, getSignatureFactory, listSignaturesFactory } from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))

	router.get('/subscriptions/:id', adaptRoute(getSignatureFactory()))

	router.get('/subscriptions', adaptRoute(listSignaturesFactory()))
}
