import { UpdateCardSignatureData } from '../../../data/signatures'
import { UpdateCardSignaturePagarme } from '../../../infra/pagar-me'
import { UpdateCardSignatureController } from '../../../presentation/controllers/signatures'

export const updateCardSignatureFatory = (): UpdateCardSignatureController => {
	const updateCardSignatureInfra = new UpdateCardSignaturePagarme()

	const updateCardSignatureData = new UpdateCardSignatureData(updateCardSignatureInfra)

	return new UpdateCardSignatureController(updateCardSignatureData)
}
