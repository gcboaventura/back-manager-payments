import { GatewayResponse, ListPlansUseCase, PlanModel, QueryPlan } from '@/domain'
import { ListPlansGateway } from '../protocols'

export class ListPlansData implements ListPlansUseCase {
	private readonly listPlansGateway: ListPlansGateway

	constructor(listPlansGateway: ListPlansGateway) {
		this.listPlansGateway = listPlansGateway
	}

	async list(query?: QueryPlan): Promise<GatewayResponse<PlanModel[]>> {
		const gatewayList = await this.listPlansGateway.list(query)

		return gatewayList
	}
}
