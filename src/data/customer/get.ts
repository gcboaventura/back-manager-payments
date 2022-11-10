import { GetCustomerUseCase, CustomerModel } from '../../domain'
import { GetCustomerGateway } from '../protocols'

export class GetCustomerData implements GetCustomerUseCase {
	private readonly getCustomerGateway: GetCustomerGateway

	constructor(getCustomerGateway: GetCustomerGateway) {
		this.getCustomerGateway = getCustomerGateway
	}

	async get(id: string): Promise<CustomerModel> {
		const customer = await this.getCustomerGateway.get(id)

		return customer
	}
}
