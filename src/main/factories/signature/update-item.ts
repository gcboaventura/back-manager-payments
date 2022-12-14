import { UpdateItemSignatureData } from '@/data'
import { UpdateItemSignatureController } from '@/presentation'
import { DateUtils } from '@/utils'
import { UpdateItemSignaturePagarme, UpdateItemSignatureMysql, AXIOS, connection } from '@/infra'

export const updateItemSignatureFactory = (): UpdateItemSignatureController => {
	const UpdateItemSignatureGateway = new UpdateItemSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const updateItemsSignatureRepository = new UpdateItemSignatureMysql(connection, dateUtils)

	const updateItemSignatureUseCase = new UpdateItemSignatureData(
		UpdateItemSignatureGateway,
		updateItemsSignatureRepository
	)

	return new UpdateItemSignatureController(updateItemSignatureUseCase)
}
