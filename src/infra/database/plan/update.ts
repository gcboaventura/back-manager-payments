import { Connection } from 'mysql'
import { UpdatePlanRepository } from '@/data'
import { PlanModel } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class UpdatePlanMysql implements UpdatePlanRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async update(plan: PlanModel): Promise<PlanModel> {
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
			updated_at,
			status
		} = plan

		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE PLANS SET name = ?, description = ?, statement_descriptor = ?, minimum_price = ?, interval_plan = ?, billing_type = ?, payment_methods = ?, status = ?, currency = ?, updated_at  = ? WHERE id_gateway = ?`,
				[
					name,
					description,
					statement_descriptor,
					minimum_price,
					interval,
					billing_type,
					payment_methods,
					status,
					currency,
					this.dateUtils.insertDb(updated_at),
					id
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
