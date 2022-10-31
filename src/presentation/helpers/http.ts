import { StatusCode } from '../../domain'
import { ServerError, UnauthorizedError } from '../errors'
import { HttpResponse } from '../protocols'

export const badRequest = (error: Error): HttpResponse => ({
	statusCode: StatusCode.BadRequest,
	body: error
})

export const unauthorized = (): HttpResponse => ({
	statusCode: StatusCode.Unauthorized,
	body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
	statusCode: StatusCode.ServerError,
	body: new ServerError(error)
})

export const success = (data?: any): HttpResponse => ({
	statusCode: StatusCode.Success,
	body: data
})

export const forbidden = (data?: any): HttpResponse => ({
	statusCode: StatusCode.Fobidden,
	body: data
})
