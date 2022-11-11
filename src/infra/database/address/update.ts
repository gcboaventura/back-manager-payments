import { Connection } from 'mysql'
import { UpdateAddressRepository } from '../../../data'
import { AddressModel } from '../../../domain'

export class UpdateAddressMysql implements UpdateAddressRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async update(address: AddressModel): Promise<AddressModel> {
		const { line_2, id } = address

		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE CARDS SET line_2 = ? WHERE id_gateway = ?`,
				[line_2, id],
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
