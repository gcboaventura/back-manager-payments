import { ListCustomersUseCase, CustomerModel, QueryCustomers, GatewayResponse } from '@/domain'
import { ListCustomersGateway } from '../protocols'

export class ListCustomersData implements ListCustomersUseCase {
	private readonly listCustomersGateway: ListCustomersGateway

	constructor(listCustomersGateway: ListCustomersGateway) {
		this.listCustomersGateway = listCustomersGateway
	}

	async list(query?: QueryCustomers): Promise<GatewayResponse<CustomerModel[]>> {
		const customerList = await this.listCustomersGateway.list(query)

		return customerList
	}
}
