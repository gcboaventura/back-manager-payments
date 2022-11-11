import { Connection } from 'mysql'
import { UpdateCustomerRepository } from '../../../data'
import { CustomerUpdateModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class UpdateCustomerMysql implements UpdateCustomerRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async update(customer: CustomerUpdateModel): Promise<CustomerUpdateModel> {
		const {
			id,
			name,
			email,
			code,
			document,
			document_type,
			type,
			gender,
			birthdate,
			updated_at,
			phones: {
				mobile_phone: { area_code, country_code, number }
			}
		} = customer

		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE CUSTOMERS SET name = ?, email = ?, code = ?, document = ?, document_type = ?, type = ?, gender = ?, birthdate = ?, phone = ? updated_at = ? WHERE id_gateway = ?`,
				[
					name,
					email,
					code,
					document,
					document_type,
					type,
					gender,
					birthdate,
					`${country_code}${area_code}${number}`,
					this.dateUtils.insertDb(updated_at),
					id
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
