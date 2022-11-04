import mysql from 'mysql'
import { env } from '../../../main/config'

export const connection = mysql.createConnection({
	host: env.DB_HOST,
	user: env.DB_USER,
	password: env.DB_PASSWORD,
	port: env.DB_PORT,
	database: env.DB_DATABASE,
	timezone: env.DB_TIMEZONE
})
