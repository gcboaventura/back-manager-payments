import { DeleteItemSignatureData } from '@/data'
import { DeleteItemSignatureController } from '@/presentation'
import { DateUtils } from '@/utils'
import { DeleteItemSignaturePagarme, DeleteItemSignatureMysql, AXIOS, connection } from '@/infra'

export const deleteItemSignatureFactory = (): DeleteItemSignatureController => {
	const deleteItemSignatureGateway = new DeleteItemSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const deleteItemsSignatureRepository = new DeleteItemSignatureMysql(connection, dateUtils)

	const deleteItemSignatureUseCase = new DeleteItemSignatureData(
		deleteItemSignatureGateway,
		deleteItemsSignatureRepository
	)

	return new DeleteItemSignatureController(deleteItemSignatureUseCase)
}
