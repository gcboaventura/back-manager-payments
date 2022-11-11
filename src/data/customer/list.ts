import { ListCustomersUseCase, CustomerModel, QueryCustomers, GatewayResponse } from '../../domain'
import { ListCustomersGateway } from '../protocols'

export class ListCustomersData implements ListCustomersUseCase {
	private readonly ListCustomersGateway: ListCustomersGateway

	constructor(ListCustomersGateway: ListCustomersGateway) {
		this.ListCustomersGateway = ListCustomersGateway
	}

	async list(query?: QueryCustomers): Promise<GatewayResponse<CustomerModel[]>> {
		const customerList = await this.ListCustomersGateway.list(query)

		return customerList
	}
}