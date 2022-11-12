import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addSignatureFactory } from '../factories'

export default (router: Router): void => {
	router.post('/subscriptions', adaptRoute(addSignatureFactory()))
}
