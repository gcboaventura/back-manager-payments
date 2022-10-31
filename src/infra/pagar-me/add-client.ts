import { AddClientInfra } from '../../data/protocols'
import { ClientEntity, ClientModel } from '../../domain/client'
import Pagarme from 'pagarme'

export class AddClientPagarme implements AddClientInfra {
	async add(client: ClientEntity): Promise<ClientModel> {
		const pagarmeClient = await Pagarme.client.connect({
			api_key: ''
		})

		const add = await pagarmeClient.transactions.create({
			customer: client
		})

		return add
	}
}
