import { Connection } from 'mysql'
import { DeleteCardRepository } from '../../../data'
import { CardModel } from '../../../domain'

export class DeleteCardMysql implements DeleteCardRepository {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
	}

	async delete(customer_id: string, card_id: string): Promise<CardModel> {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`DELETE FROM CARDS WHERE id_gateway = ?`,
				[card_id],
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
