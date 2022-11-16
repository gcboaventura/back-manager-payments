import { CustomerUpdateModel, UpdateCustomerUseCase } from '@/domain'

export interface UpdateCustomerGateway extends UpdateCustomerUseCase {}

export interface UpdateCustomerRepository {
	update(customer: CustomerUpdateModel): Promise<CustomerUpdateModel>
}
