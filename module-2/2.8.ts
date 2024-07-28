{


const getToDoData = async()=> {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data = await response.json()
return data 
}


const createPromise = ()=> {
    return new Promise((resolve, reject)=> {
        const data: string = "something"
        if(data){
    resolve(data)
        }
        else{
            reject("Failed to resolve promise")
        }
    })
    
}

// calling create promise Function

const showData = async()=> {
    const data = await createPromise()
}


showData()










}