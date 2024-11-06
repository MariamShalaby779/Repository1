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

let TwoWheel=0;
vehicles.forEach(vehicles =>{
    if(vehicles.wheels===2){
        TwoWheel++;}
});
console.log(TwoWheel);

const NumberofWheels = vehicles.every(vehicle => vehicle.wheels >= 2);
console.log(NumberofWheels); 

const Result=vehicles.find(vehicle=> {vehicle.weight==="heavy"
     return vehicle;

});


const result = vehicles.filter(vehicle=>{vehicle.weight==="heavy"
  return vehicle ;
});

console.log(result);
console.log(Result);