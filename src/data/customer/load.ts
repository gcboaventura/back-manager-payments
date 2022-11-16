import { LoadCustomerByEmailUseCase, CustomerModel, GatewayResponse } from '@/domain'
import { LoadCustomerByEmailGateway } from '../protocols'

export class LoadCustomerByEmailData implements LoadCustomerByEmailUseCase {
	private readonly loadCustomerByEmailGateway: LoadCustomerByEmailGateway

	constructor(loadCustomerByEmailGateway: LoadCustomerByEmailGateway) {
		this.loadCustomerByEmailGateway = loadCustomerByEmailGateway
	}

	async get(email: string): Promise<GatewayResponse<CustomerModel>> {
		const customer = await this.loadCustomerByEmailGateway.get(email)

		return customer
	}
}
