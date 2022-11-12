import { AddItemSignatureData } from '../../../data'
import { AddItemSignatureController } from '../../../presentation'
import { AddItemSignaturePagarme, AddItemsSignatureMysql, AXIOS, connection } from '../../../infra'
import { DateUtils } from '../../../utils'

export const AddItemSignatureFactory = (): AddItemSignatureController => {
	const addItemSignatureGateway = new AddItemSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addItemsSignatureRepository = new AddItemsSignatureMysql(connection, dateUtils)

	const addItemSignatureUseCase = new AddItemSignatureData(
		addItemSignatureGateway,
		addItemsSignatureRepository
	)

	return new AddItemSignatureController(addItemSignatureUseCase)
}
