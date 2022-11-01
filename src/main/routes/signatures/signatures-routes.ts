import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { addSignatureFatory } from '../../factories/signtatures'

export default (router: Router): void => {
	router.post('/add-signature', adaptRoute(addSignatureFatory()))
}
