import { Connection } from 'mysql'
import { DeletePlanRepository } from '@/data'
import { PlanModel } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class DeletePlanMysql implements DeletePlanRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async delete(plan_id: string, deleted_at: string): Promise<PlanModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE PLANS SET deleted_at = ? WHERE id_gateway = ?`,
				[this.dateUtils.insertDb(deleted_at), plan_id],
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
