import { Connection } from 'mysql'
import { TableModels } from './types'

export class CreateTable implements TableModels {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
		this.client()
	}

	client(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS CLIENTS (
					id_gateway VARCHAR(255),
					email VARCHAR(255),
					plan INT,
					due_date DATE,
					card_token VARCHAR(255),
					created_at DATETIME,
					updated_at DATETIME,
          UNIQUE(email)
			)`
		)
	}
}
