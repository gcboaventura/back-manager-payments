import { GetAddressUseCase, AddressModel } from '@/domain'
import { GetAddressGateway } from '../protocols/address'

export class GetAddressData implements GetAddressUseCase {
	private readonly getAddressGateway: GetAddressGateway

	constructor(getAddressGateway: GetAddressGateway) {
		this.getAddressGateway = getAddressGateway
	}

	async get(customer_id: string, address_id: string): Promise<AddressModel> {
		const address = await this.getAddressGateway.get(customer_id, address_id)

		return address
	}
}
