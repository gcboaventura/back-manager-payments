import { AddSignatureData } from '../../../data/signatures'
import { AddSignaturePagarme } from '../../../infra/pagar-me'
import { AddSignatureController } from '../../../presentation/controllers/signatures'

export const addSignatureFatory = (): AddSignatureController => {
	const addSignatureInfra = new AddSignaturePagarme()

	const addSignatureData = new AddSignatureData(addSignatureInfra)

	return new AddSignatureController(addSignatureData)
}
