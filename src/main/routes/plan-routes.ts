import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addPlanFactory,
	getPlanFactory,
	updatePlanFactory,
	deletePlanFactory,
	listPlansFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/plans', adaptRoute(addPlanFactory()))

	router.get('/plans/:id', adaptRoute(getPlanFactory()))

	router.put('/plans/:id', adaptRoute(updatePlanFactory()))

	router.delete('/plans/:id', adaptRoute(deletePlanFactory()))

	router.get('/plans', adaptRoute(listPlansFactory()))
}
