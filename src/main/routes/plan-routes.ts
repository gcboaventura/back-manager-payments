import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addPlanFactory,
	getPlanFactory,
	updatePlanFactory,
	deletePlanFactory,
	listPlansFactory,
	addItemPlanFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/plans', adaptRoute(addPlanFactory()))

	router.get('/plans/:id', adaptRoute(getPlanFactory()))

	router.put('/plans/:id', adaptRoute(updatePlanFactory()))

	router.delete('/plans/:id', adaptRoute(deletePlanFactory()))

	router.get('/plans', adaptRoute(listPlansFactory()))

	router.post('/plans/:id/items', adaptRoute(addItemPlanFactory()))
}
