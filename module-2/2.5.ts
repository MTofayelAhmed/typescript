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

// create Generic with tuple 
const createGenericWithTuple =<T, Q> (params1: T,params2: Q):[T, Q] => {
    return [params1, params2]
}



type User1 = {id: number, name: string}

const restTuple = createGenericWithTuple<string,User1 >("Bangladesh", {id: 222, name: "Tofayel"})

const AddCourseToStudent =<T> (student: T)=> {
    const course = "Next Level Web Development"
    return {
        ...student,
        course
    }
}
type USerS={
    name: string, 
    id: number,
    email: string
}
const courseStudent1 = AddCourseToStudent<USerS>({name: "Tofayel Ahmed", id:2222, email: "X@gmail.com"})


type User2 = {name: string, id: number, hasWatch: string}
const courseStudent2 = AddCourseToStudent<User2>({name: "Shahjalal", id: 3333, hasWatch: "Apple"})














}