export default {
	openapi: '3.0.0',
	info: {
		title: 'Gerenciador de pagamentos',
		description: 'Integração com a Pagar.me',
		version: '1.0.0'
	},
	servers: [
		{
			url: '/api'
		}
	],
	tags: [
		{
			name: 'Clientes'
		},
		{
			name: 'Cartões'
		},
		{
			name: 'Endereços'
		},
		{
			name: 'Planos'
		},
		{
			name: 'Assinaturas'
		},
		{
			name: 'Dispositivos'
		}
	]
}
