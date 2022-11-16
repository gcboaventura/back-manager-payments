import express from 'express'
import * as dotenv from 'dotenv'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'
import setupSwagger from './config-swagger'

const app = express()

dotenv.config()

setupSwagger(app)

setupMiddlewares(app)

setupRoutes(app)

export default app
