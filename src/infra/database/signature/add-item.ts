import { Connection } from 'mysql'
import { AddItemSignatureRepository } from '@/data'
import { ItemsModel } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class AddItemsSignatureMysql implements AddItemSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(subscription_id: string, item: ItemsModel): Promise<void> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO ITEMS_ADDED_TO_SIGNATURE (id_gateway, id_signature, name, description, quantity, status, price, scheme_type, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					item.id,
					subscription_id,
					item.name,
					item.description,
					item.quantity,
					item.status,
					item.pricing_scheme.price,
					item.pricing_scheme.scheme_type,
					this.dateUtils.insertDb(item.created_at),
					this.dateUtils.insertDb(item.updated_at)
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
