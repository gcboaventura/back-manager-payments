import { AddOrderUseCase, Order, OrderModel } from '../../domain'
import { AddOrderGateway } from '../protocols'

export class AddOrderData implements AddOrderUseCase {
	private readonly AddOrderGateway: AddOrderGateway

	constructor(AddOrderGateway: AddOrderGateway) {
		this.AddOrderGateway = AddOrderGateway
	}

	async add(order: Order): Promise<OrderModel> {
		const addGateway = await this.AddOrderGateway.add(order)

		return addGateway
	}
}
