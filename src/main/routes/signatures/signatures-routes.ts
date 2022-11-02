import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import {
	addSignatureFatory,
	getSignatureFatory,
	deleteSignatureFatory
} from '../../factories/signtatures'

export default (router: Router): void => {
	router.post('/add-signature', adaptRoute(addSignatureFatory()))

	router.get('/get-signature/:id', adaptRoute(getSignatureFatory()))

	router.delete('/delete-signature/:id', adaptRoute(deleteSignatureFatory()))
}
