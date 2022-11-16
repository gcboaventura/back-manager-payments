import { CancelSignatureData } from '@/data'
import { CancelSignatureController } from '@/presentation'
import { DateUtils } from '@/utils'
import { CancelSignatureMysql, CancelSignaturePagarme, AXIOS, connection } from '@/infra'

export const cancelSignatureFactory = (): CancelSignatureController => {
	const cancelSignatureGateway = new CancelSignaturePagarme(AXIOS)

	const dateUtils = new DateUtils()

	const cancelSignatureRepository = new CancelSignatureMysql(connection, dateUtils)

	const cancelSignatureUseCase = new CancelSignatureData(
		cancelSignatureGateway,
		cancelSignatureRepository
	)

	return new CancelSignatureController(cancelSignatureUseCase)
}
