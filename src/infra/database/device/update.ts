import { Connection } from 'mysql'
import { UpdateDeviceRepository } from '../../../data'
import { Device, DeviceModel } from '../../../domain'

export class UpdateDeviceMysql implements UpdateDeviceRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async update(device: Device, device_id: number): Promise<DeviceModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE DEVICES SET name = ?, full_price = ? WHERE id = ?`,
				[device.name, device.full_price, device_id],
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
