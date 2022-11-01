# BACK-END MANAGER PAYMENTS

## Instale as dependências

```
yarn
```

## CONFIGURE AS ENVS

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
```

## Ative o husky

```
yarn preapre
```

## Rodando em desenvolvimento

```
yarn dev
```

## PLANOS

DOC: https://docs.pagar.me/reference/planos-1

- /add-plan
- /get-plan/:id
- /list-plan
- /delete-plan/:id
- /update-plan
