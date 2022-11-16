import { Axios } from 'axios'
import { DeleteAddressGateway } from '@/data/protocols/address'
import { AddressModel } from '@/domain'

export class DeleteAddressPagarme implements DeleteAddressGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async delete(customer_id: string, address_id: string): Promise<AddressModel> {
		const { data } = await this.axios.delete(`/customers/${customer_id}/addresses/${address_id}`)
		return data
	}
}
