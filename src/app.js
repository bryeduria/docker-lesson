const express = require('express')
const config = require('./config/envConfig')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(config.PORT, () => {
  console.log(
    `The server is now listening at port ${config.PORT}. Have a nice day!`
  )
})
