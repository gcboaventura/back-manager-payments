import { Connection } from 'mysql'
import { UpdateItemSignatureRepository } from '@/data'
import { ItemsModel, ResponseHandleItemSignature } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class UpdateItemSignatureMysql implements UpdateItemSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async update(item: ItemsModel): Promise<ResponseHandleItemSignature> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE ITEMS_ADDED_TO_SIGNATURE SET name = ?, description = ?, quantity = ?, price = ?, scheme_type = ?, updated_at = ? WHERE id_gateway = ?`,
				[
					item.name,
					item.description,
					item.quantity,
					item.pricing_scheme.price,
					item.pricing_scheme.scheme_type,
					this.dateUtils.insertDb(item.updated_at),
					item.id
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
