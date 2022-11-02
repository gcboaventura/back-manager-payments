import { GetSignatureInfra } from '../../../data/protocols'
import { SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class GetSignaturePagarme implements GetSignatureInfra {
	async get(id: string): Promise<SignatureModel> {
		const { data } = await http.post(`/subscriptions/${id}`)
		return data
	}
}
