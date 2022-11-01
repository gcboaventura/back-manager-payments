import { ListPlansInfra } from '../../../data/protocols'
import { PlanModel, QueryListPlans } from '../../../domain'
import { http } from '../../axios'

export class ListPlanPagarme implements ListPlansInfra {
	async get(query?: QueryListPlans): Promise<PlanModel[]> {
		const params: string[] = []

		const url: string = `/plans`

		if (query) {
			Object.entries(query).map((x: string[]) =>
				params.length === 0 ? params.push(`?${x[0]}=${x[1]}`) : params.push(`&${x[0]}=${x[1]}`)
			)
		}

		const { data } = await http.get(`${url}${params.join('')}`)

		return data
	}
}
