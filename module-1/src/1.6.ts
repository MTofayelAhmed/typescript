function Add (num1: number, num2: number ): number {
    return num1 + num2
}

let TotalSum = Add(2, 4)
console.log(TotalSum)


const arrSum = (num1: number, num2:number): number => num1 + num2;
console.log(arrSum)


// function => object => method 

let User = {
name : "Tofayel",
balance: 0,
addBalance(balance: number ): string {
    return `My new Balance is ${this.balance + balance}`
}
}


let total: number[] = [1, 2, 3];
let newTotal = total.map((element:number): number => element*element);
