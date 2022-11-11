import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCustomerFactory, getCustomerFactory, updateCustomerFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers', adaptRoute(addCustomerFactory()))

	router.get('/customers/:id', adaptRoute(getCustomerFactory()))

	router.put('/customers/:id', adaptRoute(updateCustomerFactory()))
}
