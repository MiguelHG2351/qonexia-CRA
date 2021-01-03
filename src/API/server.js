const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

// Midldeware
app.use(express.json())
app.use(cors())

// Setting
app.set('port', 5000)

app.get('/', (req, res, next) => {
  if (res.statusCode < 400) {
    fs.readFile('./src/API/index.json', 'utf-8', (err, data) => {
      if (err) throw err
      res.json(JSON.parse(data))
    })
    console.log(res.statusCode)
    res.status(200)
  } else res.status(404)
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
