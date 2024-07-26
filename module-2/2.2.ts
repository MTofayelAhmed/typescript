{

type User1 = {
    name: string,
    age: number,
}

interface User2 {
    name: string, 
    age : number,
}

interface USerWithRole1 extends User2{
    role: string

}


type USerWithRole = User1 & {role: string}






const user1: USerWithRole1 = {
    name: "John",
    age: 100, 
    role: "admin"
}



















}


























