import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addAddressFactory, getAddressFactory, updateAddressFactory } from '../factories'

export default (router: Router): void => {
	router.post('/customers/:id/addresses', adaptRoute(addAddressFactory()))

	router.get('/customers/:idCustomer/addresses/:idAddress', adaptRoute(getAddressFactory()))

	router.put('/customers/:idCustomer/addresses/:idAddress', adaptRoute(updateAddressFactory()))
}
