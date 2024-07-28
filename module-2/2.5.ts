{
// function with Generic

const createArray = (params: string): string[]=> {
    return [params]
}

const res1= createArray("Bangladesh")


const createArrayWithGeneric =<T> (params: T): T[]=> {
    return [params]
}

type User = {name: string, id: number}


const resWithGeneric = createArrayWithGeneric<string>("Bangladesh")
const resWithObj= createArrayWithGeneric<User>({name: "Bangladesh", id: 222})










}