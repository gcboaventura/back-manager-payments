# BACK-END MANAGER PAYMENTS

![img](assets/diagrama.png)

## Sobre

Este serviço é uma integração com o gateway de pagamentos Pagar.me, que possibilita a realização de cobranças pontuais ou recorrentes. Segue abaixo as funcionalidades:

- CRUD de usuários
- CRUD de planos
- CRUD de endereços
- CRUD de Cartões de crédito
- Geraçaõ de ordem de pagamento
- Calculo de valor proporcional por dispositivo

## Desing Patterns

- Factory
- Adapter
- Dependency Injection

## Metodologias

- Clean Architecture
- Conventional Commits
- GitFlow
- Use Cases

Clean arquitecture tem como fundamento a organização das camadas da aplicação com níveis de acesso, por exemplo:

- Infra acessa Data
- Data acessa Presentation
- Presentation acessa Domain.

## Health check

Esta aplicação está disponível no Heroku como base de testes. Foi criado uma rota de verificação de saúde.

Acesse: https://back-manager-payments.herokuapp.com/api/health-check

Retorno esperado:

```
{
	"check": "I'm working fine, on port alguma porta."
}
```

## Domain

Como o próprio nome sugere, a pasta possui arquivos que delimitam as entidades da aplicação, ou seja, estabelecem os requisitos e os casos de uso, como por exemplo: get, put, delete e post.

## Presentation

A camada de apresentação, possui os controllers responsáveis pelas validações das rotas, tem acesso a helpers http e validadores.

## Data

Camada acessada somente com a liberação do presentation, onde de fato manipulamos os dados.

Como por exemplo em um caso de singup, seria onde faríamos o encrypter da senha do usuário.
No caso desta aplicação, foi usada para requisitar o gateway de pagamento e o repositório local.

## Infra

Camada onde fazemos a conexão com as dependências extenas do projeto.

## Main

Esta pasta não está represnetada na imagem acima, pois se trata da configuração do projeto, dela que é configurado as rotas, factories, server e afins.

## Banco de dados

O Gateway de pagamento armazena as informações, porém foi decicido espelhar todas as informaçoões em um banco local, desta forma, ao inciar o servidor, são criadas algumas tabelas e de acordo com as transações executadas, são salvos os retornos do gateway de pagamento localmente.

## Fluxo de uma rota

Ao solicitar qualquer rota, a api segue o fluxo da seguinte forma:

- 1º Recebe a requisição pelo arquivo de routes dentro de main/routes
- 2ª Repassa a request e response através de um adaptador criado baseado no express
- 3º Passa as informações para um factory
- 4º O factory por sua vez, injeta todas a dependência necessária no controller
- 5º O controller faz as valiações necessárias e chama a camada de dados
- 6º A camada de dados recebe a injeção de dependência do Gatyeway de pagamentos e em algumas vezes o repositório e posteriormente executa as chamadas
- 7º O Gateway de pagamento executa a função e retorna o modelo de retorno definido do Domain
- 8º Caso exista a injeção de dependência de resositório, a cama de dados irá aguardar a ação no banco de dados
- 9ª Em casos de sucesso a resposta volta ao controller e por sua vez repassa ao factory e posteriormente ao response da rota chamada

## Rotas

Todas as rotas da aplicação, com exceção dos devices foram baseadas na mesma syntax disponibilizada pela Pagar.me V5. Segue a documentação:

- Customers: https://docs.pagar.me/reference/clientes-1
- Cartões: https://docs.pagar.me/reference/cart%C3%B5es-1
- Endereços: https://docs.pagar.me/reference/endere%C3%A7os
- Pedidos: https://docs.pagar.me/reference/pedidos-1
- Planos: https://docs.pagar.me/reference/planos-1
- Assinaturas: https://docs.pagar.me/reference/assinaturas-1

## Devices

Foi criado um CRUD de devices que serve para cadastro do valor do dispositivo que cada plano terá.

O Objeto device possui os seguintes tipos:

```
export interface Device {
	name: string
	full_price: number
}

export interface DeviceModel extends Device {
	id: number
	proportional_value: number
}

```

Casos de uso:

```
export interface AddDeviceUseCase {
	add(device: Device): Promise<DeviceModel>
}

export interface GetDeviceUseCase {
	get(id: number): Promise<DeviceModel>
}

export interface UpdateDeviceUseCase {
	update(device: Device, device_id: number): Promise<DeviceModel>
}

export interface ListDevicesUseCase {
	list(): Promise<DeviceModel[]>
}

export interface DeleteDeviceUseCase {
	delete(id: number): Promise<DeviceModel>
}

export interface GetDeviceProportionalValueUseCase {
	get(id: number): Promise<DeviceModel>
}
```

- GET /devices
- POST /devices
- PUT /devices/:id
- DELETE /devices/:id
- GET /devices/:id/proportional

A rota /devices/:id/proportional retorna o valor proporcional de um device relativo ao dia do mês. O cálculo é feito da seguinte forma:

```
const valuePerDay = full_price / this.dateUtils.daysInMonth()

const daysToEndOfMonth = this.dateUtils.daysToEndOfMonth()

const proportionalValue = valuePerDay * daysToEndOfMonth

return proportionalValue
```

Portanto, o valor é atualizado diariamente.

## Assinatura

Quando um usuário faz assinatura, ele utiliza um plano como base de cobrança.

## Incremento de assinatura

Quando um usuário decide adicionar novos itens na assinatura, usuamos a rota de cálculo de valor proporcional, e após a confirmação do usuário é gerado um pedido avulso com o valor porporcional e na próxima cobrança da assinatura será cobrada o valor integral.

## Instale as dependências

```
yarn
```

## Configure as envs

crie um arquivo `.env` na raiz e adicione:

```
PORT=
PAGARME_SECRET_KEY=
PAGARME_PUBLIC_KEY=
PAGARME_ENDPOINT=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_DATABASE=
DB_TIMEZONE=
```

## Ative o husky

```
yarn preapre
```

## Rodando em desenvolvimento

```
yarn dev
```

## Rodando em produção

```
yarn build
```

```
yarn start
```

## Docker

```
docker build -t back-manager-payments .
```

```
docker run -p 4000:4000 back-manager-payments
```
