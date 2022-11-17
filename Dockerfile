FROM node:18.12.1

WORKDIR /usr/src/back-manager-payments

COPY ./package.json .

RUN yarn --only=prod