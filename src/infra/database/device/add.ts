import { Connection } from 'mysql'
import { AddDeviceRepository } from '@/data'
import { Device, DeviceModel } from '@/domain'

export class AddDeviceMysql implements AddDeviceRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async add(device: Device): Promise<DeviceModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO DEVICES (name, full_price) VALUES (?, ?)`,
				[device.name, device.full_price],
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
