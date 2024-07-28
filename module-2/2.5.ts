{
// function with Generic

const createArray = (params: string): string[]=> {
    return [params]
}

const res1= createArray("Bangladesh")


const createArrayWithGeneric =<T> (params: T): T[]=> {
    return [params]
}


const resWithGeneric = createArrayWithGeneric<string>("Bangladesh")










}