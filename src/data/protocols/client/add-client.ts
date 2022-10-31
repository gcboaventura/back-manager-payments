import { ClientGatewayEntity, ClientGatewayModel, ClientModel } from '../../../domain/client'

export interface AddClientGatewayProtocol {
	add(client: ClientGatewayEntity): Promise<ClientGatewayModel>
}

export interface AddClientRepositoryProtocol {
	add(client: ClientModel): Promise<ClientModel>
}
