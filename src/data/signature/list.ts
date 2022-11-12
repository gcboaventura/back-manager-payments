import { ListSignaturesGateway } from '../protocols'
import {
	GatewayResponse,
	ListSignaturesUseCase,
	QuerySignatures,
	SignatureModel
} from '../../domain'

export class ListSignaturesData implements ListSignaturesUseCase {
	private readonly listSignaturesGateway: ListSignaturesGateway

	constructor(listSignaturesGateway: ListSignaturesGateway) {
		this.listSignaturesGateway = listSignaturesGateway
	}

	async list(query?: QuerySignatures): Promise<GatewayResponse<SignatureModel[]>> {
		const signaturesGateway = await this.listSignaturesGateway.list(query)

		return signaturesGateway
	}
}
