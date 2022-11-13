import { Connection } from 'mysql'
import { AddOrderRepository } from '../../../data'
import { OrderModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddOrderMysql implements AddOrderRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(order: OrderModel): Promise<OrderModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO ORDERS (id_gateway, id_customer, id_charge, closed, code, amount, currency, status, created_at, updated_at, closed_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					order.id,
					order.customer.id,
					order.charges[0].id,
					order.closed,
					order.code,
					order.amount,
					order.currency,
					order.status,
					this.dateUtils.insertDb(order.created_at),
					this.dateUtils.insertDb(order.updated_at),
					this.dateUtils.insertDb(order.closed_at)
				],
				(error: any, res: any) => {
					if (error) {
						reject(error)
					}
					resolve(res)
				}
			)
		})
	}
}
