import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'
import { noCache } from '../middlewares'
import swaggerJson from '../docs'

export default (app: Express): void => {
	app.use('/api-docs', noCache, serve, setup(swaggerJson))
}
