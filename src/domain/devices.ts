export interface Device {
	name: string
	full_price: number
}

export interface DeviceModel extends Device {
	id: number
}

export interface AddDeviceUseCase {
	add(device: Device): Promise<DeviceModel>
}

export interface GetDeviceUseCase {
	get(id: number): Promise<DeviceModel>
}

export interface UpdateDeviceUseCase {
	update(device: Device, device_id: number): Promise<DeviceModel>
}

export interface ListDevicesUseCase {
	list(): Promise<DeviceModel[]>
}

export interface DeleteDeviceUseCase {
	delete(id: number): Promise<DeviceModel>
}
