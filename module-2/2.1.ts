{
// type assertion

let anyValue : any;
anyValue = "Next Level Web Development";
anyValue = true ;

(anyValue as string)


const kgToGrm = (value: string | number) : string | number | undefined=> {
    if (typeof value === "string"){
        const convertedValue = parseFloat(value)*1000;
        return `The converted value is ${convertedValue}`
    }
    if( typeof value === "number"){
        const numberValue = value*1000;
        return numberValue;
    }
}

const result = kgToGrm("1000") as string;
const result1 = kgToGrm (1000) as number;




}