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
				  id_local INT PRIMARY KEY AUTO INCREMENT,
					id_signature VARCHAR(255),
					created_at DATETIME,
					updated_at DATETIME,
			)`
		)
	}
}
