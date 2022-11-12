import { Router } from 'express'
import { adaptRoute } from '../adapters'
import {
	addPlanFactory,
	getPlanFactory,
	updatePlanFactory,
	deletePlanFactory,
	listPlansFactory,
	addItemPlanFactory,
	updateItemPlanFactory,
	deleteItemPlanFactory
} from '../factories'

export default (router: Router): void => {
	router.post('/plans', adaptRoute(addPlanFactory()))

	router.get('/plans/:id', adaptRoute(getPlanFactory()))

	router.put('/plans/:id', adaptRoute(updatePlanFactory()))

	router.delete('/plans/:id', adaptRoute(deletePlanFactory()))

	router.get('/plans', adaptRoute(listPlansFactory()))

	router.post('/plans/:id/items', adaptRoute(addItemPlanFactory()))

	router.put('/plans/:idPlan/items/:idItem', adaptRoute(updateItemPlanFactory()))

	router.delete('/plans/:idPlan/items/:idItem', adaptRoute(deleteItemPlanFactory()))
}
