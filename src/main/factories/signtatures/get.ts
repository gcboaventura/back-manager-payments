import { GetSignatureData } from '../../../data/signatures'
import { GetSignaturePagarme } from '../../../infra/pagar-me'
import { GetSignatureController } from '../../../presentation/controllers/signatures'

export const getSignatureFatory = (): GetSignatureController => {
	const getSignatureInfra = new GetSignaturePagarme()

	const getSignatureData = new GetSignatureData(getSignatureInfra)

	return new GetSignatureController(getSignatureData)
}
