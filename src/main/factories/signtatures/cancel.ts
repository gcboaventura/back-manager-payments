import { CancelSignatureData } from '../../../data/signatures'
import { CancelSignaturePagarme } from '../../../infra/pagar-me'
import { CancelSignatureController } from '../../../presentation/controllers/signatures'

export const cancelSignatureFatory = (): CancelSignatureController => {
	const cancelSignatureInfra = new CancelSignaturePagarme()

	const cancelSignatureData = new CancelSignatureData(cancelSignatureInfra)

	return new CancelSignatureController(cancelSignatureData)
}
