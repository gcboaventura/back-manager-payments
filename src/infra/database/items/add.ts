import { Connection } from 'mysql'
import { AddItemsSignatureRepository } from '../../../data'
import { ItemsModel, SignatureModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddItemsSignatureMysql implements AddItemsSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(signature: SignatureModel): Promise<void> {
		const insertDb = signature.items.forEach((item: ItemsModel) => {
			return new Promise((resolve, reject) => {
				this.connection.query(
					`INSERT INTO ITEMS (id_gateway, id_customer, id_signature, name, description, quantity, status, price, scheme_type, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
					[
						item.id,
						signature.customer.id,
						signature.id,
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
		})

		return insertDb
	}
}
