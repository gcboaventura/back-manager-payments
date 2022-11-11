import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addAddressFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers/:id/addresses', adaptRoute(addAddressFactory()))
}
