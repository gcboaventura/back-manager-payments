import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addSignatureFactory,
	cancelSignatureFactory,
	getSignatureFactory,
	listSignaturesFactory,
	AddItemSignatureFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))

	router.get('/subscriptions/:id', adaptRoute(getSignatureFactory()))

	router.get('/subscriptions', adaptRoute(listSignaturesFactory()))

	router.delete('/subscriptions/:id', adaptRoute(cancelSignatureFactory()))

	router.post('/subscriptions/:id/items', adaptRoute(AddItemSignatureFactory()))

	router.get('/subscriptions/:id/items', adaptRoute(AddItemSignatureFactory()))
}
