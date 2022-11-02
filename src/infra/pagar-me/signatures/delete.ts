import { DeleteSignatureInfra } from '../../../data/protocols'
import { SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class DeleteSignaturePagarme implements DeleteSignatureInfra {
	async delete(id: string): Promise<SignatureModel> {
		const { data } = await http.delete(`/subscriptions/${id}`)
		return data
	}
}
