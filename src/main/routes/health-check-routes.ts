import { Response, Router, Request } from 'express'
import { env } from '../config'
export default (router: Router): void => {
	router.get('/health-check', (request: Request, response: Response) =>
		response.status(200).json({ check: `I'm working fine, on port ${env.PORT}.` })
	)
}
