import { Connection } from 'mysql'
import { CancelSignatureRepository } from '../../../data'
import { SignatureModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class CancelSignatureMysql implements CancelSignatureRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async cancel(signature_id: string, canceled_at: string): Promise<SignatureModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE SIGNATURES SET canceled_at = ? WHERE id_gateway = ?`,
				[this.dateUtils.insertDb(canceled_at), signature_id],
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
