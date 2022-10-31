import express from 'express'
import * as dotenv from 'dotenv'
import setupRoutes from './routes'

const app = express()

dotenv.config()

setupRoutes(app)

export default app
