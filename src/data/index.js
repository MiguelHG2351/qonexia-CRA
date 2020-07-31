export default function(getRoute, getData) {
    // console.log(getRoute, getData);
    let data;
    if (getRoute.category.brand[getData.brand] !== undefined) {
      getRoute.category.brand[getData.brand].forEach((element, index) => {
        if (
          getRoute.category.brand[getData.brand][index].name ===
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
  