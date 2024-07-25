{

// nullable type

const searchType = (value: string |null )=> {
    if (value){
        console.log(value)
    }
    else {
        console.log("there is no search Name")
    }
}

searchType(null)


const getSpeedInMeterPerSecond = (value: unknown)=>{
    if (typeof value === "number"){
        const convertedSpeed = (value * 1000)/3600;

    }
    else if (typeof value === "string"){

        const stringToNumber =  value.split(" ")
        const [x, y]= stringToNumber;
        const finalConversion = parseFloat(x)
const speed =(finalConversion * 1000 ) / 3600
        console.log(speed)

        

    }

    else {
        console.log( "the input is not valid")
    }
}

getSpeedInMeterPerSecond("1000 kmh^-1")


// never Type 

const throwError = (message: string): never=> {
    throw new Error(message)
}

throwError("Error just happened in Life")

















}