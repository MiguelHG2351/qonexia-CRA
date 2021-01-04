const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

// Midldeware
app.use(express.json())
app.use(cors())

// Setting
app.set('port', 5000)

// functions
function checkbrand (search, data) {
  /*eslint-disable */
  let brandInfo;
  // let brands = [
  //   "Xiaomi",
  //   "Samsung",
  //   "Apple",
  //   "Huawei",
  //   "Realme",
  //   "Nintendo",
  //   "GoPro",
  //   "Amazfit",
  //   "default",
  // ];
  brandInfo =
    data.all.find(
      (brand) =>
        brand.name.indexOf(search) <= 8 && brand.name.indexOf(search) >= 0
    ) || undefined;

  /* eslint-enable */
  return brandInfo
}

app.get('/api/search/:name', (req, res) => {
  if (res.statusCode < 400) {
    fs.readFile('./src/API/products.json', 'utf-8', (err, data) => {
      const info = checkbrand(req.params.name, JSON.parse(data))
      if (err) throw err
      res.json(info)
    })
    console.log(res.statusCode)
    res.status(200)
  } else res.status(404)
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
