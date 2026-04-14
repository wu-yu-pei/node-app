FROM registry.cn-hangzhou.aliyuncs.com/library/node

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
