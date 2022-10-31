export default {
	PORT: process.env.PORT || 4000,
	PAGARME_SECRET_KEY: process.env.PAGARME_SECRTET_KEY || '',
	PAGARME_PUBLIC_KEY: process.env.PAGARME_PUBLIC_KEY || '',
	PAGARME_ENDPOINT: process.env.PAGARME_ENDPOINT || '',
	DB_HOST: process.env.DB_HOST || '',
	DB_USER: process.env.DB_USER || '',
	DB_PASSWORD: process.env.DB_PASSWORD || '',
	DB_PORT: process.env.DB_PORT || ''
}
