import { AddSignatureData } from '../../../data'
import { AddSignatureController } from '../../../presentation'
import { DateUtils } from '../../../utils'
import {
	AddItemsSignatureMysql,
	AddSignatureMysql,
	AddSignaturePagarme,
	AXIOS,
	connection
} from '../../../infra'

export const addSignatureFactory = (): AddSignatureController => {
	const addSignatureGateway = new AddSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addSignatureRepository = new AddSignatureMysql(connection, dateUtils)

	const addItemsSignatureRepository = new AddItemsSignatureMysql(connection, dateUtils)

	const addSignatureUseCase = new AddSignatureData(
		addSignatureGateway,
		addSignatureRepository,
		addItemsSignatureRepository
	)

	return new AddSignatureController(addSignatureUseCase)
}
