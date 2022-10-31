import { AddPlanInfra } from '../../../data/protocols'
import { PlanEntity } from '../../../domain'
import { env } from '../../../main/config'
import pagarme from 'pagarme'

export class AddPlanPagarme implements AddPlanInfra {
	async add(plan: PlanEntity): Promise<any> {
		const client = await pagarme.client.connect({ api_key: env.PAGARME_SECRET_KEY })

		const insert = await client.plans.create(undefined, { ...plan })

		return insert
	}
}
