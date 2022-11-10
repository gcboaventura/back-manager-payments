export interface GatewayResponse<T> {
	data: T[]
	paging: {
		total?: number
	}
}
