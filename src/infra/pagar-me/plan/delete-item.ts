import { Axios } from 'axios'
import { DeleteItemPlanGateway } from '@/data'
import { ResponseHandleItemsPlans } from '@/domain'

export class DeleteItemPlanPagarme implements DeleteItemPlanGateway {
	private readonly axios: Axios

	constructor(axios: Axios) {
		this.axios = axios
	}

	async delete(plan_id: string, item_id: string): Promise<ResponseHandleItemsPlans> {
		const { data } = await this.axios.delete(`/plans/${plan_id}/items/${item_id}`)
		return data
	}
}
