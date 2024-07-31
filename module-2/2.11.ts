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














}