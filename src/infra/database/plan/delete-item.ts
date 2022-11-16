import { Connection } from 'mysql'
import { DeleteItemPlanRepository } from '@/data'
import { ResponseHandleItemsPlans } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class DeleteItemPlanMysql implements DeleteItemPlanRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async delete(deleted_at: string, item_id: string): Promise<ResponseHandleItemsPlans> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE ITEMS_PLAN SET deleted_at = ? WHERE id_gateway = ?`,
				[this.dateUtils.insertDb(deleted_at), item_id],
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
