import axios, { Axios } from 'axios'
import { env } from '@/main/config'
import { IncomingHttpHeaders } from 'http'

const headers: IncomingHttpHeaders = {
	'content-type': 'application/json',
	authorization: 'Basic ' + Buffer.from(env.PAGARME_SECRET_KEY).toString('base64')
}

const baseURL = env.PAGARME_ENDPOINT

export const AXIOS: Axios = axios.create({
	headers,
	baseURL,
	auth: {
		username: env.PAGARME_SECRET_KEY,
		password: ''
	}
})
