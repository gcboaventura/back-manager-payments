import { Connection } from 'mysql'
import { AddPlanRepository } from '../../../data'
import { PlanModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddPlanMysql implements AddPlanRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(plan: PlanModel): Promise<PlanModel> {
		const {
			id,
			name,
			description,
			statement_descriptor,
			minimum_price,
			interval,
			billing_type,
			payment_methods,
			currency,
			created_at,
			updated_at,
			status
		} = plan

		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO PLANS (id_gateway, name, description, statement_descriptor, minimum_price, interval_plan, billing_type, payment_methods, status, currency, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					id,
					name,
					description,
					statement_descriptor,
					minimum_price,
					interval,
					billing_type,
					payment_methods,
					status,
					currency,
					this.dateUtils.insertDb(created_at),
					this.dateUtils.insertDb(updated_at)
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
