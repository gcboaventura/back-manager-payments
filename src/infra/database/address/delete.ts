import { Connection } from 'mysql'
import { DeleteAddressRepository } from '../../../data'
import { AddressModel } from '../../../domain'

export class DeleteAddressMysql implements DeleteAddressRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async delete(address_id: string): Promise<AddressModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`DELETE FROM ADDRESS WHERE id_gateway = ?`,
				[address_id],
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
