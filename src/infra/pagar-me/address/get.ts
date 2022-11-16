import { Axios } from 'axios'
import { GetAddressGateway } from '@/data/protocols/address'
import { AddressModel } from '@/domain'

export class GetAddressPagarme implements GetAddressGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async get(customer_id: string, address_id: string): Promise<AddressModel> {
		const { data } = await this.axios.get(`/customers/${customer_id}/addresses/${address_id}`)
		return data
	}
}
