import { AddAddressUseCase, Address, AddressModel } from '../../domain'
import { AddAddressRepository } from '../protocols'
import { AddAddressGateway } from '../protocols/address'

export class AddAddressData implements AddAddressUseCase {
	private readonly addAddressGateway: AddAddressGateway
	private readonly addAddressRepository: AddAddressRepository

	constructor(addAddressGateway: AddAddressGateway, addAddressRepository: AddAddressRepository) {
		this.addAddressGateway = addAddressGateway
		this.addAddressRepository = addAddressRepository
	}

	async add(address: Address, customer_id: string): Promise<AddressModel> {
		const addGateway = await this.addAddressGateway.add(address, customer_id)

		await this.addAddressRepository.add(addGateway, customer_id)

		return addGateway
	}
}
