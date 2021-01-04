const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')

// Midldeware
app.use(express.json())
app.use(cors())

// Setting
app.set('port', 5000)

// // functions
// function checkbrand (search) {
//   /*eslint-disable */
//   let brandInfo;
//   let brands = [
//     "Xiaomi",
//     "Samsung",
//     "Apple",
//     "Huawei",
//     "Realme",
//     "Nintendo",
//     "GoPro",
//     "Amazfit",
//     "default",
//   ];
//   let brand;
//   let name;

//   brandInfo =
//     context.all.find(
//       (brand) =>
//         brand.name.indexOf(search) <= 8 && brand.name.indexOf(search) >= 0
//     ) || undefined;
//   name = brandInfo != undefined ? brandInfo.name : undefined;
//   brand =
//     name !== undefined
//       ? brands.find((brand) => brandInfo.name.includes(brand))
//       : undefined; // get brand

//   /* eslint-enable */
//   return [brand, name]
// }

app.get('/api/search/:name', (req, res) => {
  if (res.statusCode < 400) {
    console.log(req.params)
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
