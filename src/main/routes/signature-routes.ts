import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addSignatureFactory,
	cancelSignatureFactory,
	getSignatureFactory,
	listSignaturesFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))

	router.get('/subscriptions/:id', adaptRoute(getSignatureFactory()))

	router.get('/subscriptions', adaptRoute(listSignaturesFactory()))

	router.delete('/subscriptions/:id', adaptRoute(cancelSignatureFactory()))
}
