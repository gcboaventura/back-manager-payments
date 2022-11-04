import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import {
	addSignatureFatory,
	getSignatureFatory,
	cancelSignatureFatory
} from '../../factories/signtatures'

export default (router: Router): void => {
	router.post('/add-signature', adaptRoute(addSignatureFatory()))

	router.get('/get-signature/:id', adaptRoute(getSignatureFatory()))

	router.delete('/cancel-signature/:id', adaptRoute(cancelSignatureFatory()))
}
