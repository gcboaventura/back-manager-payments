import { Connection } from 'mysql'
import { TableModels } from './types'

export class CreateTable implements TableModels {
	private readonly connection: Connection

	constructor(connection: Connection) {
		this.connection = connection
		this.devices()
		this.orders()
		this.itemsSignature()
		this.signatures()
		this.itemsPlan()
		this.plans()
		this.card()
		this.address()
		this.customer()
	}

	customer(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS CUSTOMERS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					name VARCHAR(64),
					email VARCHAR(64),
					code VARCHAR(52),
					document VARCHAR(50),
					document_type VARCHAR(8),
					type VARCHAR(10),
					gender VARCHAR(6),
					delinquent BOOLEAN,
					id_address VARCHAR(100),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					birthdate VARCHAR(25),
					phone VARCHAR(14),

					PRIMARY KEY (id)
			)`
		)
	}

	address(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ADDRESS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_customer VARCHAR(100),
					line_1 VARCHAR(256),
					line_2 VARCHAR(128),
					zip_code VARCHAR(16),
					city VARCHAR(64),
					state VARCHAR(5),
					country VARCHAR(2),
					status VARCHAR(10),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	card(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS CARDS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_customer VARCHAR(100),
					first_six_digits VARCHAR(6),
					last_four_digits VARCHAR(4),
					brand VARCHAR(100),
					holder_name VARCHAR(100),
					holder_document VARCHAR(100),
					exp_month VARCHAR(2),
					exp_year VARCHAR(4),
					status VARCHAR(10),
					label VARCHAR(100),
					type VARCHAR(10),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	plans(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS PLANS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					name VARCHAR(64),
					description VARCHAR(255),
					statement_descriptor VARCHAR(50),
					minimum_price INT,
					interval_plan VARCHAR(10),
					billing_type VARCHAR(15),
					payment_methods VARCHAR(255),
					installments INT,
					status VARCHAR(10),
					currency VARCHAR(10),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					deleted_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	itemsPlan(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ITEMS_PLAN (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_plan VARCHAR(100),
					name VARCHAR(64),
					description VARCHAR(255),
					quantity VARCHAR(255),
					status VARCHAR(10),
					price INT,
					scheme_type VARCHAR(15),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					deleted_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	signatures(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS SIGNATURES (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_customer VARCHAR(100),
					id_plan VARCHAR(100),
					code VARCHAR(52),
					start_at VARCHAR(25),
					interval_signature VARCHAR(10),
					interval_count INT,
					billing_type VARCHAR(15),
					next_billing_at VARCHAR(25),
					payment_method VARCHAR(15),
					currency VARCHAR(10),
					statement_descriptor VARCHAR(100),
					installments INT,
					status VARCHAR(10),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					canceled_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	itemsSignature(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ITEMS_ADDED_TO_SIGNATURE (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_signature VARCHAR(100),
					id_order VARCHAR(100),
					name VARCHAR(64),
					description VARCHAR(255),
					quantity VARCHAR(255),
					status VARCHAR(10),
					price INT,
					scheme_type VARCHAR(15),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					deleted_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	orders(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS ORDERS (
				  id INT NOT NULL AUTO_INCREMENT,
					id_gateway VARCHAR(100),
					id_customer VARCHAR(100),
					id_charge VARCHAR(100),
					closed BOOLEAN,
					code VARCHAR(52),
					amount INT,
					currency VARCHAR(10),
					status VARCHAR(10),
					created_at VARCHAR(25),
					updated_at VARCHAR(25),
					closed_at VARCHAR(25),

					PRIMARY KEY (id)
			)`
		)
	}

	devices(): void {
		this.connection.query(
			`CREATE TABLE IF NOT EXISTS DEVICES (
				  id INT NOT NULL AUTO_INCREMENT,
					name VARCHAR(255),
					full_price INT,

					PRIMARY KEY (id)
			)`
		)
	}
}
