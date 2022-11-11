import { Axios } from 'axios'
import { AddAddressGateway } from '../../../data'
import { Address, AddressModel } from '../../../domain'

export class AddAddressPagarme implements AddAddressGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(address: Address, customer_id: string): Promise<AddressModel> {
		const { data } = await this.axios.post(`/customers/${customer_id}/addresses`, address)
		return data
	}
}
