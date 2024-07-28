{


    const AddCourseToStudent =<T extends {id: number, name: string, email: string}> (student: T)=> {
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