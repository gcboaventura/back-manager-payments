import { AddSignatureInfra } from '../../../data/protocols'
import { SignatureEntity, SignatureModel } from '../../../domain'
import { http } from '../../axios'

export class AddSignaturePagarme implements AddSignatureInfra {
	async add(signature: SignatureEntity): Promise<SignatureModel> {
		const { data } = await http.post('/subscriptions', signature)
		return data
	}
}
