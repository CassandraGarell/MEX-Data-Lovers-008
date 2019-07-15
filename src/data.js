window.dataManager = {
   
    filterRick : (data) => {
        let items = data.filter(element => element.name.indexOf('Rick') > -1);
        console.log(items)
        return items;
    },
    filterMorty :(data) => {
        let items = data.filter(element => element.name.indexOf('Morty') > -1);
        return items;
    },
    
    filterOtros : (data) => {
    let items = data.filter(element => element.name.includes('Rick') == false && element.name.includes('Morty') == false  );
    console.log(items) 
    return items;
    
  },
    
    orderAz:(data,az)=>{
    if (az == "A-Z"){
      const result= data.sort((a,b)=>{
          if (a.name.toLowerCase() < b.name.toLowerCase()
          ) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()
          ) return 1;
          return 0;
      });
      return result;
  }
  else {
      const result= data.sort((a,b)=>{
          if (a.name.toLowerCase() > b.name.toLowerCase()
          ) return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()
          ) return 1;
          return 0;
      });
      return result;
  }
  }
     
​}
    // window.order = order;
    // window.orderZA = orderZA;
