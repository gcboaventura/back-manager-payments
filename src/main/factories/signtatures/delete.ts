import { DeleteSignatureData } from '../../../data/signatures'
import { DeleteSignaturePagarme } from '../../../infra/pagar-me'
import { DeleteSignatureController } from '../../../presentation/controllers/signatures'

export const deleteSignatureFatory = (): DeleteSignatureController => {
	const deleteSignatureInfra = new DeleteSignaturePagarme()

	const deleteSignatureData = new DeleteSignatureData(deleteSignatureInfra)

	return new DeleteSignatureController(deleteSignatureData)
}
