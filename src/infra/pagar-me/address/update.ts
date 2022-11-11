import { Axios } from 'axios'
import { UpdateAddressGateway } from '../../../data/protocols/address'
import { AddressModel, AddressUpdate } from '../../../domain'

export class UpdateAddressPagarme implements UpdateAddressGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(
		address: AddressUpdate,
		customer_id: string,
		address_id: string
	): Promise<AddressModel> {
		const { data } = await this.axios.put(
			`/customers/${customer_id}/addresses/${address_id}`,
			address
		)
		return data
	}
}
