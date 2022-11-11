import { Connection } from 'mysql'
import { AddCardRepository } from '../../../data'
import { CardModel } from '../../../domain'
import { DateModel } from '../../../utils/date/types'

export class AddCardMysql implements AddCardRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async add(card: CardModel): Promise<CardModel> {
		const {
			id,
			customer: { id: customerId },
			first_six_digits,
			last_four_digits,
			brand,
			holder_name,
			holder_document,
			exp_month,
			exp_year,
			status,
			label,
			type,
			created_at,
			updated_at
		} = card

		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO CARDS (id_gateway, id_customer, first_six_digits, last_four_digits, brand, holder_name, holder_document, exp_month, exp_year, status, label, type, created_at, updated_at)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					id,
					customerId,
					first_six_digits,
					last_four_digits,
					brand,
					holder_name,
					holder_document,
					exp_month,
					exp_year,
					status,
					label,
					type,
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
