import { AddSignatureData } from '../../../data/signatures'
import { AddSignatureRepository } from '../../../infra/database'
import { AddSignaturePagarme } from '../../../infra/pagar-me'
import { AddSignatureController } from '../../../presentation/controllers/signatures'
import { Date } from '../../../presentation/helpers'

export const addSignatureFatory = (): AddSignatureController => {
	const addSignatureInfra = new AddSignaturePagarme()

	const dateHelper = new Date()

	const addSignatureRepository = new AddSignatureRepository(dateHelper)

	const addSignatureData = new AddSignatureData(addSignatureInfra, addSignatureRepository)

	return new AddSignatureController(addSignatureData)
}
