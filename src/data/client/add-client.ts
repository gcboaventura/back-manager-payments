import { AddClientUseCase, ClientEntity, ClientModel } from '../../domain/client'
import { AddClientInfra } from '../protocols/client'

export class AddClientData implements AddClientUseCase {
	private readonly addClientInfra: AddClientInfra

	constructor(addClientInfra: AddClientInfra) {
		this.addClientInfra = addClientInfra
	}

	async add(client: ClientEntity): Promise<ClientModel> {
		const addPagarme = await this.addClientInfra.add(client)
		return addPagarme
	}
}
