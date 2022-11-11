import { UpdateAddressUseCase, AddressModel, AddressUpdate } from '../../domain'
import { UpdateAddressGateway, UpdateAddressRepository } from '../protocols/address'

export class UpdateAddressData implements UpdateAddressUseCase {
	private readonly updateAddressGateway: UpdateAddressGateway
	private readonly updateAddressRepository: UpdateAddressRepository

	constructor(
		updateAddressGateway: UpdateAddressGateway,
		updateAddressRepository: UpdateAddressRepository
	) {
		this.updateAddressGateway = updateAddressGateway
		this.updateAddressRepository = updateAddressRepository
	}

	async update(
		address: AddressUpdate,
		customer_id: string,
		address_id: string
	): Promise<AddressModel> {
		const addGateway = await this.updateAddressGateway.update(address, customer_id, address_id)

		await this.updateAddressRepository.update(addGateway)

		return addGateway
	}
}
