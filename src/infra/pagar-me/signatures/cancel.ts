import { CancelSignatureInfra } from '../../../data/protocols'
import { SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class CancelSignaturePagarme implements CancelSignatureInfra {
	async cancel(id: string): Promise<SignatureModel> {
		const { data } = await http.delete(`/subscriptions/${id}`)
		return data
	}
}
