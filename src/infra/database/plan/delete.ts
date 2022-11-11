import { Connection } from 'mysql'
import { DeletePlanRepository } from '../../../data'
import { PlanModel } from '../../../domain'

export class DeletePlanMysql implements DeletePlanRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async delete(plan_id: string): Promise<PlanModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`DELETE FROM PLANS WHERE id_gateway = ?`,
				[plan_id],
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
