import { ListItemsSignatureData } from '@/data'
import { ListItemsSignatureController } from '@/presentation'
import { ListItemsSignaturePagarme, AXIOS } from '@/infra'

export const listItemsSignatureFactory = (): ListItemsSignatureController => {
	const listItemsSignatureGateway = new ListItemsSignaturePagarme(AXIOS)

	const listItemsSignatureUseCase = new ListItemsSignatureData(listItemsSignatureGateway)

	return new ListItemsSignatureController(listItemsSignatureUseCase)
}
