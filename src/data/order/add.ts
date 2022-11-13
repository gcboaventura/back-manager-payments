import { AddOrderUseCase, Order, OrderModel } from '../../domain'
import { AddOrderGateway, AddOrderRepository } from '../protocols'

export class AddOrderData implements AddOrderUseCase {
	private readonly AddOrderGateway: AddOrderGateway
	private readonly addOrderRepository: AddOrderRepository

	constructor(AddOrderGateway: AddOrderGateway, addOrderRepository: AddOrderRepository) {
		this.AddOrderGateway = AddOrderGateway
		this.addOrderRepository = addOrderRepository
	}

	async add(order: Order): Promise<OrderModel> {
		const addGateway = await this.AddOrderGateway.add(order)

		await this.addOrderRepository.add(addGateway)

		return addGateway
	}
}
