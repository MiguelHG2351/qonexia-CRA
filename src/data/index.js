export default function(getRoute, getData) {
    // console.log(getRoute, getData);
    let data;
    if (getRoute.category.brand[getData.brand] !== undefined) {
      getRoute.category.brand[getData.brand].forEach(element => {
        if (
          element.name ===
          `${getData.devices}`
        ) {
          data = element;
        }
        // data = getRoute.default[0];
      });
      if(data === undefined) {
        data = getRoute.default[0]
      }
    } else {
      data = getRoute.default[0];
    }

    return data;
  }
  
//   console.log(context.all.sort((a, b) => {
//     if(a.precio > b.precio) {
//         return 1;
//     } else if(a.precio < b.precio){
//         return -1;
//     }
//     return 0;
// }))

// for(let data in api.category.brand.Xiaomi[4]) {console.log(api.category.brand.Xiaomi[5][data])}
// guardar en el localstorage la cantidad de veces que una persona visita un telefono para recomendarselo cada vez que vaya a otro
// Algorítmo para calcular según el precio y la potencia del dispositivo que tipo de telefonos le gusta a una perosona
// Los productos con venta flash tendran un background rojizo
// Utilizar slice para tener un string más corto para dar las sugerencias