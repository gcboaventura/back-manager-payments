import { Connection } from 'mysql'
import { DeleteItemSignatureRepository } from '../../../data'
import { ItemsModel, ResponseHandleItemSignature } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class DeleteItemSignatureMysql implements DeleteItemSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async delete(item: ItemsModel): Promise<ResponseHandleItemSignature> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE ITEMS_ADDED_TO_SIGNATURE SET deleted_at = ? WHERE id_gateway = ?`,
				[this.dateUtils.insertDb(item.deleted_at), item.id],
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
