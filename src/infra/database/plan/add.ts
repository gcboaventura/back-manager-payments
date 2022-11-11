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
		return new Promise((resolve, reject) => {
			this.connection.query(`INSERT INTO PLANS () VALUES()`, [], (error: any, res: any) => {
				if (error) {
					reject(error)
				}
				resolve(res)
			})
		})
	}
}
