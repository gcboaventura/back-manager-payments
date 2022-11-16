import { Connection } from 'mysql'
import { AddSignatureRepository } from '@/data'
import { SignatureModel } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class AddSignatureMysql implements AddSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(signature: SignatureModel): Promise<SignatureModel> {
		const {
			id,
			customer,
			plan,
			code,
			start_at,
			interval,
			interval_count,
			billing_type,
			next_billing_at,
			payment_method,
			currency,
			statement_descriptor,
			installments,
			status,
			created_at,
			updated_at,
			canceled_at
		} = signature
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO SIGNATURES (id_gateway, id_customer, id_plan, code, start_at, interval_signature, interval_count, billing_type, next_billing_at,
					payment_method, currency, statement_descriptor, installments, status, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					id,
					customer.id,
					plan.id,
					code,
					this.dateUtils.insertDb(start_at),
					interval,
					interval_count,
					billing_type,
					next_billing_at,
					payment_method,
					currency,
					statement_descriptor,
					installments,
					status,
					this.dateUtils.insertDb(created_at),
					this.dateUtils.insertDb(updated_at)
				],
				(error: any, res: any) => {
					if (error) {
						reject(error)
					}
					resolve(res)
				}
			)
		})
	}
}
