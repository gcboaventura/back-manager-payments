import { Router } from 'express'
import { adaptRoute } from '../adapters'
import { addDeviceFactory, getDeviceFactory, updateDeviceFactory } from '../factories'

export default (router: Router): void => {
	router.post('/devices', adaptRoute(addDeviceFactory()))

	router.get('/devices/:id', adaptRoute(getDeviceFactory()))

	router.put('/devices/:id', adaptRoute(updateDeviceFactory()))
}
