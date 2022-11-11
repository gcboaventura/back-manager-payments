import { Connection } from 'mysql'
import { DeletePlanRepository } from '../../../data'
import { PlanModel } from '../../../domain'

export class DeletePlanMysql implements DeletePlanRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async delete(plan_id: string, deleted_at: string): Promise<PlanModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE PLANS SET deleted_at = ? WHERE id_gateway = ?`,
				[deleted_at, plan_id],
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
