import { RequestModel } from './types'

export class RequestUtils implements RequestModel {
	queryParam(query?: any): string {
		const params: string[] = []

		if (query) {
			Object.entries(query).forEach((x: [string, unknown]) => {
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			})
		}

		return params.join('')
	}
}
