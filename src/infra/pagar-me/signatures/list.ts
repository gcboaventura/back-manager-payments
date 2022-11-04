import { ListSignaturesInfra } from '../../../data/protocols'
import { QueryListSignatures, SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class ListSignaturesPagarme implements ListSignaturesInfra {
	async list(query?: QueryListSignatures): Promise<SignatureModel[]> {
		const params: string[] = []

		const url: string = `/subscriptions`

		if (query) {
			Object.entries(query).map((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await http.get(`${url}${params.join('')}`)

		return data
	}
}
