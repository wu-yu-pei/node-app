FROM alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/node:20.16

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
