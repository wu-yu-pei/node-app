const express = require('express');
const os = require("os")
const fs = require('fs')

const app = express();
fs.mkdirSync('./file', { recursive: true })

let time = 0;
const oneMB = Buffer.alloc(1024 * 1024 * 1024, '-')
setInterval(() => {
  fs.writeFileSync('./file/a.txt', oneMB, {
    flag: 'a',
    encoding: 'utf-8',
  })
}, 1000)

app.get('/', (req, res) => {
  res.send(`Hello World v20.0.0! hostName -> ${os.hostname()} time -> ${time}s aliyiun`);
})

app.get('/health', (req, res) => {
  res.status(200).send("ok")
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!!');
})
