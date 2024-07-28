{

type Vehicle = {
bike: string;
car: string;
ship: string;
}

type Owner = keyof Vehicle;

const getPropertyValue = <T,V extends keyof T> (obj: T , key: V )=>{
    return obj[key]}


const user = {
    name: "Tofayel",
    age: 20,
    address: "caldenhoferWeg"
}
const result = getPropertyValue(user, "name")


















}