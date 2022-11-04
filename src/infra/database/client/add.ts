import { AddSignatureRepositoryInfra } from '../../../data/protocols'
import { SignatureRepositoryModel, SinatureRepositoryEntity } from '../../../domain'
import { DateValidator } from '../../../presentation/protocols'
import { connection } from '../config/connection'

export class AddSignatureRepository implements AddSignatureRepositoryInfra {
	private readonly dateHelper: DateValidator

	constructor(dateHelper: DateValidator) {
		this.dateHelper = dateHelper
	}

	async add(data: SinatureRepositoryEntity): Promise<SignatureRepositoryModel> {
		return new Promise((resolve, reject) => {
			connection.query(
				`INSERT INTO CLIENTS (id_signature, created_at, updated_at) VALUES (?, ?, ?)`,
				[
					data.id_signature,
					this.dateHelper.insertDb(data.created_at),
					this.dateHelper.insertDb(data.updated_at)
				],
				(error: any, res: any) => {
					if (error) {
						reject()
					}
					resolve(res)
				}
			)
		})
	}
}
