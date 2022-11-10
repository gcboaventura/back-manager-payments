import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addCustomerFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers', adaptRoute(addCustomerFactory()))
}
