import { GetAddressUseCase, AddressModel } from '../../domain'
import { GetAddressGateway } from '../protocols/address'

export class GetAddressData implements GetAddressUseCase {
	private readonly GetAddressGateway: GetAddressGateway

	constructor(GetAddressGateway: GetAddressGateway) {
		this.GetAddressGateway = GetAddressGateway
	}

	async get(customer_id: string, address_id: string): Promise<AddressModel> {
		const address = await this.GetAddressGateway.get(customer_id, address_id)

		return address
	}
}
