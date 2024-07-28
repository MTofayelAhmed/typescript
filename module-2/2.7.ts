{

type Vehicle = {
bike: string;
car: string;
ship: string;
}

type Owner = keyof Vehicle;

const getPropertyValue = (obj: object, key: string)=>{
    return obj[key]
}

const user = {
    name: "Tofayel",
    age: 20,
    address: "caldenhoferWeg"
}

















}