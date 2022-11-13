import { AddItemSignatureUseCase, AddOrderUseCase, GetSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class AddItemSignatureController implements Controller {
	private readonly addItemSignatureUseCase: AddItemSignatureUseCase
	private readonly getSignatureUseCase: GetSignatureUseCase
	private readonly addOrderUseCase: AddOrderUseCase

	constructor(
		addItemSignatureUseCase: AddItemSignatureUseCase,
		getSignatureUseCase: GetSignatureUseCase,
		addOrderUseCase: AddOrderUseCase
	) {
		this.addItemSignatureUseCase = addItemSignatureUseCase
		this.getSignatureUseCase = getSignatureUseCase
		this.addOrderUseCase = addOrderUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const {
				pricing_scheme: { price },
				quantity,
				description
			} = httpRequest.body

			const signature = await this.getSignatureUseCase.get(httpRequest.params.id)

			const itemSignature = await this.addItemSignatureUseCase.add(
				httpRequest.params.id,
				httpRequest.body
			)

			const order = await this.addOrderUseCase.add({
				items: [
					{
						amount: price,
						description: description,
						quantity: quantity,
						code: 'any'
					}
				],
				payments: [
					{
						credit_card: {
							card_id: signature.card.id,
							operation_type: 'auth_and_capture',
							installments: 1,
							statement_descriptor: 'PRIMAGE'
						},
						payment_method: 'credit_card',
						amount: price
					}
				],
				customer_id: signature.customer.id,
				closed: true
			})
			return success({ itemSignature, order })
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
