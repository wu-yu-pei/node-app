FROM node:20-alpine3.21

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]