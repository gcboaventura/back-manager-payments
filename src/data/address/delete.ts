import { DeleteAddressUseCase, AddressModel } from '../../domain'
import { DeleteAddressGateway, DeleteAddressRepository } from '../protocols'

export class DeleteAddressData implements DeleteAddressUseCase {
	private readonly deleteAddressGateway: DeleteAddressGateway
	private readonly deleteAddressRepository: DeleteAddressRepository

	constructor(
		deleteAddressGateway: DeleteAddressGateway,
		deleteAddressRepository: DeleteAddressRepository
	) {
		this.deleteAddressGateway = deleteAddressGateway
		this.deleteAddressRepository = deleteAddressRepository
	}

	async delete(customer_id: string, address_id: string): Promise<AddressModel> {
		const deleteGateway = await this.deleteAddressGateway.delete(customer_id, address_id)

		await this.deleteAddressRepository.delete(address_id)

		return deleteGateway
	}
}
