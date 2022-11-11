import { UpdateCustomerUseCase, CustomerModel } from '../../domain'
import { UpdateCustomerGateway, UpdateCustomerRepository } from '../protocols'

export class UpdateCustomerData implements UpdateCustomerUseCase {
	private readonly updateCustomerGateway: UpdateCustomerGateway
	private readonly updateCustomerRepository: UpdateCustomerRepository

	constructor(
		updateCustomerGateway: UpdateCustomerGateway,
		updateCustomerRepository: UpdateCustomerRepository
	) {
		this.updateCustomerGateway = updateCustomerGateway
		this.updateCustomerRepository = updateCustomerRepository
	}

	async update(customer: CustomerModel): Promise<CustomerModel> {
		const updateGateway = await this.updateCustomerGateway.update(customer)

		await this.updateCustomerRepository.update(updateGateway)

		return updateGateway
	}
}
