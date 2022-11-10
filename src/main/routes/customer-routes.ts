import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCustomerFactory, getCustomerFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers', adaptRoute(addCustomerFactory()))

	router.get('/customers/:id', adaptRoute(getCustomerFactory()))
}
