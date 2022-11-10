import { LoadCustomerByEmailUseCase, CustomerModel, GatewayResponse } from '../../domain'
import { LoadCustomerByEmailGateway } from '../protocols'

export class LoadCustomerByEmailData implements LoadCustomerByEmailUseCase {
	private readonly LoadCustomerByEmailGateway: LoadCustomerByEmailGateway

	constructor(LoadCustomerByEmailGateway: LoadCustomerByEmailGateway) {
		this.LoadCustomerByEmailGateway = LoadCustomerByEmailGateway
	}

	async get(email: string): Promise<GatewayResponse<CustomerModel>> {
		const customer = await this.LoadCustomerByEmailGateway.get(email)

		return customer
	}
}
