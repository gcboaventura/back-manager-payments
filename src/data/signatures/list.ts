import { ListSignaturesUseCase, QueryListSignatures, SignatureModel } from '../../domain'
import { ListSignaturesInfra } from '../protocols'

export class ListSignaturesData implements ListSignaturesUseCase {
	private readonly listSignaturesInfra: ListSignaturesInfra

	constructor(listSignaturesInfra: ListSignaturesInfra) {
		this.listSignaturesInfra = listSignaturesInfra
	}
	async list(query?: QueryListSignatures): Promise<SignatureModel[]> {
		const signatures = await this.listSignaturesInfra.list(query)
		return signatures
	}
}
