{

type User1 = {
    name: string,
    age: number,
}


type USerWithRole = User1 & {role: string}



interface User2 {
    name: string, 
    age : number,
}



const user1: USerWithRole = {
    name: "John",
    age: 100, 
    role: "admin"
}



















}


























