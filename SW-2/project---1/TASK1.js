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
    },
    {
        name:"monocycle",
        wheels:1,
        weight:"too light"
    }
]

let NotTwoWheel=0;
vehicles.forEach(vehicles =>{
    if(vehicles.wheels!=2){
        NotTwoWheel++;}
});
console.log(NotTwoWheel);

const NumberofWheels = vehicles.every(vehicle => vehicle.wheels >= 2);
console.log(NumberofWheels); 

const Result=vehicles.find(BiVehicles);
console.log(Result);

const result=vehicles.filter(BiVehicles);
console.log(result);

function BiVehicles(vehicle) {
      if(vehicle.wheels===2)
      return vehicle;
    }
   
