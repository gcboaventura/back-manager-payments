import express from 'express'
import * as dotenv from 'dotenv'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

const app = express()

dotenv.config()

setupRoutes(app)

setupMiddlewares(app)

export default app
