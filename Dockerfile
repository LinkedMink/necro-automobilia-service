FROM node:12

ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "startApp" ]
