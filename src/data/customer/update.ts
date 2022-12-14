import { UpdateCustomerUseCase, CustomerUpdateEntity, CustomerUpdateModel } from '@/domain'
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

	async update(customer: CustomerUpdateEntity, id: string): Promise<CustomerUpdateModel> {
		const updateGateway = await this.updateCustomerGateway.update(customer, id)

		await this.updateCustomerRepository.update(updateGateway)

		return updateGateway
	}
}
