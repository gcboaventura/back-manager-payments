import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addPlanFactory, getPlanFactory } from '../factories'

export default (router: Router): void => {
	router.post('/plans', adaptRoute(addPlanFactory()))

	router.get('/plans/:id', adaptRoute(getPlanFactory()))
}
