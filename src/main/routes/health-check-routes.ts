import { Response, Router, Request } from 'express'
import { StatusCode } from '@/domain'
import { env } from '../config'

export default (router: Router): void => {
	router.get('/health-check', (request: Request, response: Response) =>
		response.status(StatusCode.Success).json({ check: `I'm working fine, on port ${env.PORT}.` })
	)
}
