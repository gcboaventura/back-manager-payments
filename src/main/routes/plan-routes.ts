import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addPlanFactory } from '../factories'

export default (router: Router): void => {
	router.post('/plans', adaptRoute(addPlanFactory()))
}
