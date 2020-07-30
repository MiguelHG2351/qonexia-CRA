export default function(getRoute, getData) {
    // console.log(getRoute, getData);
    let data;
    debugger
    if (getRoute.category.brand[getData.brand] !== undefined) {
      getRoute.category.brand[getData.brand].forEach((element, index) => {
        if (
          getRoute.category.brand[getData.brand][index].name ===
          `${getData.devices}`
        ) {
          data = element;
        }
      });
    } else {
      data = getRoute.default[0];
    }

    return data;
    
  }
  