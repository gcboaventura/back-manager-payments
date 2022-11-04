import { ListSignaturesData } from '../../../data/signatures'
import { ListSignaturesPagarme } from '../../../infra/pagar-me'
import { ListSignatureController } from '../../../presentation/controllers/signatures'

export const ListSignaturesFatory = (): ListSignatureController => {
	const listSignaturesInfra = new ListSignaturesPagarme()

	const listSignaturesData = new ListSignaturesData(listSignaturesInfra)

	return new ListSignatureController(listSignaturesData)
}
