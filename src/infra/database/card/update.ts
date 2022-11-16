import { Connection } from 'mysql'
import { UpdateCardRepository } from '@/data'
import { CardModel } from '@/domain'
import { DateModel } from '@/utils/date/types'

export class UpdateCardMysql implements UpdateCardRepository {
	private readonly connection: Connection
	private readonly dateUtils: DateModel

	constructor(connection: Connection, dateUtils: DateModel) {
		this.connection = connection
		this.dateUtils = dateUtils
	}

	async update(card: CardModel): Promise<CardModel> {
		const {
			id,
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
			updated_at
		} = card

		return new Promise((resolve, reject) => {
			this.connection.query(
				`UPDATE CARDS SET first_six_digits = ?, last_four_digits = ?, brand = ?, holder_name = ?, holder_document = ?, exp_month = ?, exp_year = ?, status = ?, label = ?, type = ?, updated_at = ? WHERE id_gateway = ?`,
				[
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
					this.dateUtils.insertDb(updated_at),
					id
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
