
module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  return { 
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
}

function succeed(item) {
  if (item.enhancement === 20){

    return { 
        name: item.name,
        enhancement: item.enhancement,
        durability: item.durability
      }
  }else{
    return { 
      name: item.name,
      enhancement: item.enhancement + 1,
      durability: item.durability
    }
  }
    
 
}



function fail(item) {
  if (item.enhancement < 15){

    return { 
      ...item,
        durability: item.durability - 5
      }
  }
  if (item.enhancement > 16){
    return { 
      ...item,
      enhancement: item.enhancement - 1,
    }
  }
  if (item.enhancement >= 15){
    return { 
      ...item,
      durability: item.durability - 10
    }
  }

 
    
 
}


function get(item) {
  return { 
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability
  };
}


