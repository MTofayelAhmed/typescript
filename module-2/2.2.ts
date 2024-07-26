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


// IN JS Function ===> Array ===> object 



const user1: USerWithRole1 = {
    name: "John",
    age: 100, 
    role: "admin"
}

type Roll1 = number[];


interface Roll2 {
    [index : number ] : number
}


const roll1: Roll2 = [1, 2, 3, 4];

type Add1 = (num1: number, num2: number)=> number

interface Add2 {
    (num1: number, num2: number): number
}

const add: Add2 = (num1, num2)=> num1 + num2














}


























