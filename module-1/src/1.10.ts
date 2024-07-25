{

// Union Type 

// type FrontEndDeveloper = "JuniorDeveloper" | "SeniorDeveloper";


// const newDeveloper: FrontEndDeveloper = "JuniorDeveloper"


// type User = {
//     Name : string ;
//     Email ?: string;
//     Gender : "Male"| "Female";
//     BloodGroup: "A+"| "B+"| "C+"| "OB+"
// }


// const user : User = {
//     Name : "John",
//     Gender: "Male",
//     BloodGroup: "OB+"


// }


// Intersection Type 


type FrontEndDeveloper = {
    Skills : string[];
    designation : string;

}
type BackEndDeveloper = {
    Skills : string[];
    designation1: string ;

}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    Skills: ["HTML", "CSS", "JavaScript"],
    designation: "frontendDeveloper",
    designation1: "backendDeveloper"

}
















}