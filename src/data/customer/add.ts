import { AddCustomerUseCase, Customer, CustomerModel } from '../../domain'
import { AddAddressRepository, AddCustomerGateway, AddCustomerRepository } from '../protocols'

export class AddCustomerData implements AddCustomerUseCase {
	private readonly addCustomerGateway: AddCustomerGateway
	private readonly addCustomerRepository: AddCustomerRepository
	private readonly addAddressRepository: AddAddressRepository

	constructor(
		addCustomerGateway: AddCustomerGateway,
		addCustomerRepository: AddCustomerRepository,
		addAddressRepository: AddAddressRepository
	) {
		this.addCustomerGateway = addCustomerGateway
		this.addCustomerRepository = addCustomerRepository
		this.addAddressRepository = addAddressRepository
	}

	async add(customer: Customer): Promise<CustomerModel> {
		const addGateway = await this.addCustomerGateway.add(customer)

		await this.addAddressRepository.add(addGateway.address, addGateway.id)

		await this.addCustomerRepository.add(addGateway)

		return addGateway
	}
}
