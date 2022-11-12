import { Axios } from 'axios'
import { AddItemPlanGateway } from '../../../data'
import { Items, ResponseHandleItemsPlans } from '../../../domain'

export class AddItemPlanPagarme implements AddItemPlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async add(plan_id: string, item: Items): Promise<ResponseHandleItemsPlans> {
		const { data } = await this.axios.post(`/plans/${plan_id}/items`, item)
		return data
	}
}
