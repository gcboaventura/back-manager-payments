import { AddSignatureData } from '@/data'
import { AddSignatureController } from '@/presentation'
import { DateUtils } from '@/utils'
import { AddSignatureMysql, AddSignaturePagarme, AXIOS, connection } from '@/infra'

export const addSignatureFactory = (): AddSignatureController => {
	const addSignatureGateway = new AddSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const addSignatureRepository = new AddSignatureMysql(connection, dateUtils)

	const addSignatureUseCase = new AddSignatureData(addSignatureGateway, addSignatureRepository)

	return new AddSignatureController(addSignatureUseCase)
}
