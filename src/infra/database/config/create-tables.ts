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
					id INT AUTO_INCREMENT PRIMARY KEY,
					id_pagarme VARCHAR(255),
					email VARCHAR(255),
					plan INT,
					due_date DATE,
					created_at DATETIME,
					updated_at DATETIME,
          UNIQUE(email)
			)`
		)
	}
}
