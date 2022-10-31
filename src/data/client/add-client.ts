import { AddClientGatewayProtocol, AddClientRepositoryProtocol } from '../protocols/client'
import {
	AddClientUseCase,
	ClientEntity,
	ClientGatewayModel,
	ClientModel
} from '../../domain/client'

export class AddClientData implements AddClientUseCase {
	private readonly addClientGateway: AddClientGatewayProtocol
	private readonly addClientRepository: AddClientRepositoryProtocol

	constructor(
		addClientGateway: AddClientGatewayProtocol,
		addClientRepository: AddClientRepositoryProtocol
	) {
		this.addClientGateway = addClientGateway
		this.addClientRepository = addClientRepository
	}

	async add(client: ClientEntity): Promise<ClientModel> {
		const addPagarme: ClientGatewayModel = await this.addClientGateway.add(
			Object.assign({}, client, {
				due_date: undefined,
				plan: undefined
			})
		)

		const addRepository = await this.addClientRepository.add({
			plan: client.plan,
			created_at: addPagarme.created_at,
			due_date: addPagarme.due_date,
			email: addPagarme.email,
			id_gateway: addPagarme.id,
			updated_at: addPagarme.updated_at
		})

		return addRepository
	}
}
