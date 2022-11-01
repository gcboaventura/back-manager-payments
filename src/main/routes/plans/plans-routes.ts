import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { addPlanFatory, getPlanFatory, listPlanFatory } from '../../factories/plans'

export default (router: Router): void => {
	router.post('/add-plan', adaptRoute(addPlanFatory()))

	router.get('/get-plan/:id', adaptRoute(getPlanFatory()))

	router.get('/list-plan', adaptRoute(listPlanFatory()))
}
