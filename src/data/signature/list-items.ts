import { ListItemsSignatureGateway } from '../protocols'
import {
	GatewayResponse,
	ItemsModel,
	ListItemsSignatureUseCase,
	QueryItemSignature
} from '../../domain'

export class ListItemsSignatureData implements ListItemsSignatureUseCase {
	private readonly listItemsSignatureGateway: ListItemsSignatureGateway

	constructor(listItemsSignatureGateway: ListItemsSignatureGateway) {
		this.listItemsSignatureGateway = listItemsSignatureGateway
	}

	async list(
		subscription_id: string,
		query?: QueryItemSignature
	): Promise<GatewayResponse<ItemsModel[]>> {
		const signaturesGateway = await this.listItemsSignatureGateway.list(subscription_id, query)

		return signaturesGateway
	}
}
