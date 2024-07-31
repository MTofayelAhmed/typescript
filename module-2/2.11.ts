{
// utility type 
// pick type 

type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
}
type Name = Pick<Person, "name" | "age">

// Omit type

type ContactInfo = Omit <Person, "name"| "age">



// required utility 
type PersonRequired = Required<Person>

// Partial Utility 

type PersonPartial = Partial<Person>

// Readonly Type 

type PersonReadOnly = Readonly<Person>

const personInfo: PersonReadOnly = {
    name: "Mr. X",
    age: 39,
    email: "stahmed@gmail.com",
    contact: "017"
}





}