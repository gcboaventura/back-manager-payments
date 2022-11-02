import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { addSignatureFatory, getSignatureFatory } from '../../factories/signtatures'

export default (router: Router): void => {
	router.post('/add-signature', adaptRoute(addSignatureFatory()))

	router.post('/get-signature/:id', adaptRoute(getSignatureFatory()))
}
