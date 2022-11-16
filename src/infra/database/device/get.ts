import { Connection } from 'mysql'
import { GetDeviceRepository } from '@/data'
import { DeviceModel } from '@/domain'

export class GetDeviceMysql implements GetDeviceRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async get(id: number): Promise<DeviceModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(`SELECT * FROM DEVICES WHERE id = ? `, [id], (error: any, res: any) => {
				if (error) {
					reject(error)
				}
				resolve(res)
			})
		})
	}
}
