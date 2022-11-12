import { Connection } from 'mysql'
import { TableModels } from './types'

export class CreateTable implements TableModels {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
		this.items()
		this.signatures()
		this.plans()
		this.card()
		this.address()
		this.customer()
	}

	customer(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS CUSTOMERS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					name VARCHAR(255),
					email VARCHAR(255),
					code VARCHAR(255),
					document VARCHAR(255),
					document_type VARCHAR(255),
					type VARCHAR(255),
					gender VARCHAR(255),
					delinquent BOOLEAN,
					id_address VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,
					birthdate VARCHAR(255),
					phone VARCHAR(255),

					PRIMARY KEY (id)
			)`
		)
	}

	address(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ADDRESS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					id_customer VARCHAR(255),
					line_1 VARCHAR(255),
					line_2 VARCHAR(255),
					zip_code VARCHAR(255),
					city VARCHAR(255),
					state VARCHAR(255),
					country VARCHAR(255),
					status VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,

					PRIMARY KEY (id)
			)`
		)
	}

	card(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS CARDS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					id_customer VARCHAR(255),
					first_six_digits VARCHAR(255),
					last_four_digits VARCHAR(255),
					brand VARCHAR(255),
					holder_name VARCHAR(255),
					holder_document VARCHAR(255),
					exp_month VARCHAR(255),
					exp_year VARCHAR(255),
					status VARCHAR(255),
					label VARCHAR(255),
					type VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,

					PRIMARY KEY (id)
			)`
		)
	}

	plans(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS PLANS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					name VARCHAR(255),
					description VARCHAR(255),
					statement_descriptor VARCHAR(255),
					minimum_price VARCHAR(255),
					interval_plan VARCHAR(255),
					billing_type VARCHAR(255),
					payment_methods VARCHAR(255),
					installments VARCHAR(255),
					status VARCHAR(255),
					currency VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,
					deleted_at TIMESTAMP,

					PRIMARY KEY (id)
			)`
		)
	}

	signatures(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS SIGNATURES (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					id_customer VARCHAR(255),
					id_plan VARCHAR(255),
					code VARCHAR(255),
					start_at TIMESTAMP,
					interval_signature VARCHAR(255),
					interval_count VARCHAR(255),
					billing_type VARCHAR(255),
					next_billing_at VARCHAR(255),
					payment_method VARCHAR(255),
					currency VARCHAR(255),
					statement_descriptor VARCHAR(255),
					installments VARCHAR(255),
					status VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,
					canceled_at TIMESTAMP,

					PRIMARY KEY (id)
			)`
		)
	}

	items(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ITEMS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(255),
					id_customer VARCHAR(255),
					id_signature VARCHAR(255),
					name VARCHAR(255),
					description VARCHAR(255),
					quantity VARCHAR(255),
					status VARCHAR(255),
					price VARCHAR(255),
					scheme_type VARCHAR(255),
					created_at TIMESTAMP,
					updated_at TIMESTAMP,

					PRIMARY KEY (id)
			)`
		)
	}
}
