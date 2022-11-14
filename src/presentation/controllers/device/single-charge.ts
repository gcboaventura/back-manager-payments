import { AddOrderUseCase, GetSignatureUseCase } from '../../../domain'
import { serverError, success } from '../../helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class SingleChargeDeviceController implements Controller {
	private readonly getSignatureUseCase: GetSignatureUseCase
	private readonly addOrderUseCase: AddOrderUseCase

	constructor(getSignatureUseCase: GetSignatureUseCase, addOrderUseCase: AddOrderUseCase) {
		this.getSignatureUseCase = getSignatureUseCase
		this.addOrderUseCase = addOrderUseCase
	}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const {
				data: {
					subscription,
					quantity,
					pricing_scheme: { price },
					description
				}
			} = httpRequest.body

			const signature = await this.getSignatureUseCase.get(subscription.id)

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
						amount: price * quantity
					}
				],
				customer_id: signature.customer.id,
				closed: true
			})

			return success(order)
		} catch (error: unknown) {
			return serverError(error as Error)
		}
	}
}
