import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addDeviceFactory } from '../factories'

export default (router: Router): void => {
	router.post('/devices', adaptRoute(addDeviceFactory()))
}
