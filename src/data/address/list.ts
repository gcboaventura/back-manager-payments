import { ListAddressUseCase, AddressModel, QueryListAddress, GatewayResponse } from '../../domain'
import { ListAddressGateway } from '../protocols/address'

export class ListAddressData implements ListAddressUseCase {
	private readonly listAddressGateway: ListAddressGateway

	constructor(listAddressGateway: ListAddressGateway) {
		this.listAddressGateway = listAddressGateway
	}

	async list(
		query: QueryListAddress,
		customer_id: string
	): Promise<GatewayResponse<AddressModel[]>> {
		const address = await this.listAddressGateway.list(query, customer_id)

		return address
	}
}
