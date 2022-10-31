import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { addPlanFatory } from '../../factories/plans/add'

export default (router: Router): void => {
	router.post('/add-plan', adaptRoute(addPlanFatory()))
}
