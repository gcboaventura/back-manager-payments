import { Connection } from 'mysql'
import { DeleteDeviceRepository } from '@/data'
import { DeviceModel } from '@/domain'

export class DeleteDeviceMysql implements DeleteDeviceRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async delete(id: number): Promise<DeviceModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(`DELETE FROM DEVICES WHERE id = ?`, [id], (error: any, res: any) => {
				if (error) {
					reject(error)
				}
				resolve(res)
			})
		})
	}
}
