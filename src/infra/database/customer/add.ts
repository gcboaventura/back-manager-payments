import { Connection } from 'mysql'
import { AddCustomerRepository } from '../../../data'
import { CustomerModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddCustomerMysql implements AddCustomerRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(customer: CustomerModel): Promise<CustomerModel> {
		const {
			id,
			name,
			email,
			code,
			document,
			document_type,
			type,
			gender,
			delinquent,
			address,
			created_at,
			updated_at,
			birthdate,
			phones: {
				mobile_phone: { area_code, country_code, number }
			}
		} = customer

		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO CUSTOMERS (id_gateway, name, email, code, document, document_type, type, gender, delinquent, id_address, created_at, updated_at, birthdate, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					id,
					name,
					email,
					code,
					document,
					document_type,
					type,
					gender,
					delinquent,
					address.id,
					this.dateUtils.insertDb(created_at),
					this.dateUtils.insertDb(updated_at),
					birthdate,
					`${country_code}${area_code}${number}`
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
