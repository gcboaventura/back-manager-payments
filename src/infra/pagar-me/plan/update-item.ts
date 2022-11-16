import { Axios } from 'axios'
import { UpdateItemPlanGateway } from '@/data'
import { ItemModelPlan, ResponseHandleItemsPlans } from '@/domain'

export class UpdateItemPlanPagarme implements UpdateItemPlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async update(
		plan_id: string,
		item_id: string,
		item: ItemModelPlan
	): Promise<ResponseHandleItemsPlans> {
		const { data } = await this.axios.put(`/plans/${plan_id}/items/${item_id}`, item)
		return data
	}
}
