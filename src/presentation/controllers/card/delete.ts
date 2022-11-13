import { ListSignaturesGateway } from '../../../data'
import { DeleteCardUseCase } from '../../../domain'
import { badRequest, serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeleteCardController implements Controller {
	private readonly deleteCardUseCase: DeleteCardUseCase
	private readonly cardSignatureList: ListSignaturesGateway

	constructor(deleteCardUseCase: DeleteCardUseCase, cardSignatureList: ListSignaturesGateway) {
		this.deleteCardUseCase = deleteCardUseCase
		this.cardSignatureList = cardSignatureList
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const { idCustomer, idCard } = httpRequest.params

			const signatures = await this.cardSignatureList.list({ card_id: idCard })

			signatures.data.map((x: any) => {
				if (x.status === 'active') {
					return badRequest({
						message: 'Este cartão não pode ser excluído, possui assinatura ativa.',
						name: 'badRequest'
					})
				}
			})

			const card = await this.deleteCardUseCase.delete(idCustomer, idCard)

			return success(card)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
