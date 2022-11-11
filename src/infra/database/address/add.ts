import { Connection } from 'mysql'
import { AddAddressRepository } from '../../../data'
import { AddressModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddAddressMysql implements AddAddressRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(address: AddressModel, customer_id: string): Promise<AddressModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO ADDRESS (id_gateway, id_customer, line_1, line_2, zip_code, city, state, country, status, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					address.id,
					customer_id,
					address.line_1,
					address.line_2,
					address.zip_code,
					address.city,
					address.state,
					address.country,
					address.status,
					this.dateUtils.insertDb(address.created_at),
					this.dateUtils.insertDb(address.updated_at)
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
