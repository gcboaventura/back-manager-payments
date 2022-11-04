import { UpdateStartDateSignatureInfra } from '../../../data/protocols'
import { SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class UpdateStartDateSignaturePagarme implements UpdateStartDateSignatureInfra {
	async update(start_at: Date, idSignature: string): Promise<SignatureModel> {
		const { data } = await http.patch(`/subscriptions/${idSignature}/start-at`, start_at)
		return data
	}
}
