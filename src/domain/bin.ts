export interface BIN {
	bin: string
}

export interface BINModel {
	brand: string
	brandName: string
	gaps: number[]
	lenghts: number[]
	mask: string
	input: string
	cvv: string
}

export interface GetBinUseCase {
	get(bin: BIN): Promise<BINModel>
}
