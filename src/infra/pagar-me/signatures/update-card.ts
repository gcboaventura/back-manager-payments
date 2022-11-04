import { UpdateCardSignatureInfra } from '../../../data/protocols'
import { SignatureModel } from '../../../domain'
import { CardUpdate } from '../../../domain/card'
import { http } from '../../axios'

export class UpdateCardSignaturePagarme implements UpdateCardSignatureInfra {
	async update(card: CardUpdate, idSignature: string): Promise<SignatureModel> {
		const { data } = await http.patch(`/subscriptions/${idSignature}/card`, card)
		return data
	}
}
