import { GetSignatureData, UpdateStartDateSignatureData } from '../../../data/signatures'
import { GetSignaturePagarme, UpdateStartDateSignaturePagarme } from '../../../infra/pagar-me'
import { UpdateStartDateSignatureController } from '../../../presentation/controllers/signatures'
import { Date } from '../../../presentation/helpers'

export const updateStartDateSignatureFatory = (): UpdateStartDateSignatureController => {
	const updateStartDateSignatureInfra = new UpdateStartDateSignaturePagarme()

	const updateStartDateSignatureData = new UpdateStartDateSignatureData(
		updateStartDateSignatureInfra
	)
	const getSignatureInfra = new GetSignaturePagarme()

	const getSignatureData = new GetSignatureData(getSignatureInfra)

	const dateValidator = new Date()

	return new UpdateStartDateSignatureController(
		updateStartDateSignatureData,
		getSignatureData,
		dateValidator
	)
}
