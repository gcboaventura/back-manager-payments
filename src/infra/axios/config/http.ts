import axios, { Axios } from 'axios'
import { env } from '../../../main/config'
import { IncomingHttpHeaders } from 'http'

export enum StatusCode {
	Unauthorized = 401
}

const headers: IncomingHttpHeaders = {
	'content-type': 'application/json',
	authorization: 'Basic ' + Buffer.from(env.PAGARME_SECRET_KEY).toString('base64')
}

const baseURL = env.PAGARME_ENDPOINT

export const http: Axios = axios.create({
	headers,
	baseURL,
	auth: {
		username: env.PAGARME_SECRET_KEY,
		password: ''
	}
})
