FROM node:18.12.1

WORKDIR /usr/src/back-manager-paymnents

COPY package.json .

RUN yarn --only=prod

COPY ./dist ./dist

EXPOSE 4000

CMD yarn start