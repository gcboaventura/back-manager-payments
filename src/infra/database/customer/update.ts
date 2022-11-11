import { Connection } from 'mysql'
import { UpdateCustomerRepository } from '../../../data'
import { CustomerUpdateEntity, CustomerUpdateModel } from '../../../domain'

export class UpdateCustomerMysql implements UpdateCustomerRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async update(customer: CustomerUpdateEntity, id: string): Promise<CustomerUpdateModel> {
		const {
			name,
			email,
			code,
			document,
			document_type,
			type,
			gender,
			birthdate,
			phones: {
				mobile_phone: { area_code, country_code, number }
			}
		} = customer

		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE CUSTOMERS SET name = ?, email = ?, code = ?, document = ?, document_type = ?, type = ?, gender = ?, birthdate = ?, phone = ? WHERE id_gateway = ?`,
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
