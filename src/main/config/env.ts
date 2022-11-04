export default {
	PORT: process.env.PORT || 4000,
	PAGARME_SECRET_KEY: process.env.PAGARME_SECRET_KEY || '',
	PAGARME_PUBLIC_KEY: process.env.PAGARME_PUBLIC_KEY || '',
	PAGARME_ENDPOINT: process.env.PAGARME_ENDPOINT || '',
	DB_HOST: process.env.DB_HOST || '',
	DB_USER: process.env.DB_USER || '',
	DB_PASSWORD: process.env.DB_PASSWORD || '',
	DB_PORT: parseInt(process.env.DB_PORT || '3306'),
	DB_DATABASE: process.env.DB_DATABASE || '',
	DB_TIMEZONE: process.env.DB_TIMEZONE || ''
}
