import express from 'express'
import * as dotenv from 'dotenv'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

const app = express()

dotenv.config()

setupMiddlewares(app)

setupRoutes(app)

export default app
