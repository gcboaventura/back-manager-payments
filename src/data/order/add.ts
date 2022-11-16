import { AddOrderUseCase, Order, OrderModel } from '@/domain'
import { AddOrderGateway, AddOrderRepository } from '../protocols'

export class AddOrderData implements AddOrderUseCase {
	private readonly addOrderGateway: AddOrderGateway
	private readonly addOrderRepository: AddOrderRepository

	constructor(addOrderGateway: AddOrderGateway, addOrderRepository: AddOrderRepository) {
		this.addOrderGateway = addOrderGateway
		this.addOrderRepository = addOrderRepository
	}

	async add(order: Order): Promise<OrderModel> {
		const addGateway = await this.addOrderGateway.add(order)

		await this.addOrderRepository.add(addGateway)

		return addGateway
	}
}
