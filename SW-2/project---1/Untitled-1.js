const vehicles=[
    {
        name:"car",
        wheels:4,
        weight:"too heavy"
    },
    {
        name:"bicycle",
        wheels:2,
        weight:"light"
    },

    {
        name:"tricycle",
        wheels:3,
        weight:"heavy"
    },

    {
        name:"motorcycle",
        wheels:2,
        weight:"heavy"
    }
]

const Result=vehicles.find(checkWheels);

console.log(Result);

function checkWheels(vehicle) {
    if(vehicle.wheels===2)
    return vehicle;
  }

  const result=vehicles.filter(checkWheels);

  console.log(result);
  
  function checkWheels(vehicle) {
      if(vehicle.wheels===2)
      return vehicle;
    }  