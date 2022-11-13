import { AddOrderUseCase, OrderModel } from '../../../domain'

export interface AddOrderGateway extends AddOrderUseCase {}

export interface AddOrderRepository {
	add(order: OrderModel): Promise<OrderModel>
}
