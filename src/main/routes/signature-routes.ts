import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addSignatureFactory,
	cancelSignatureFactory,
	getSignatureFactory,
	listSignaturesFactory,
	addItemSignatureFactory,
	listItemsSignatureFactory,
	updateItemSignatureFactory,
	deleteItemSignatureFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))

	router.get('/subscriptions/:id', adaptRoute(getSignatureFactory()))

	router.get('/subscriptions', adaptRoute(listSignaturesFactory()))

	router.delete('/subscriptions/:id', adaptRoute(cancelSignatureFactory()))

	router.post('/subscriptions/:id/items', adaptRoute(addItemSignatureFactory()))

	router.get('/subscriptions/:id/items', adaptRoute(listItemsSignatureFactory()))

	router.put(
		'/subscriptions/:idSubscription/items/:idItem',
		adaptRoute(updateItemSignatureFactory())
	)

	router.delete(
		'/subscriptions/:idSubscription/items/:idItem',
		adaptRoute(deleteItemSignatureFactory())
	)
}
