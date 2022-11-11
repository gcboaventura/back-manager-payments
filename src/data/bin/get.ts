import { GetBinUseCase, BIN, BINModel } from '../../domain'
import { GetBinGateway } from '../protocols'

export class GetBinData implements GetBinUseCase {
	private readonly getBinGateway: GetBinGateway

	constructor(getBinGateway: GetBinGateway) {
		this.getBinGateway = getBinGateway
	}

	async get(bin: BIN): Promise<BINModel> {
		const address = await this.getBinGateway.get(bin)

		return address
	}
}
