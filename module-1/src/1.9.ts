{
    //  Type Alias


    type Student ={
        Name : string ;
        age : number ;
        contact?: string;
        gender : string;
        address: string;

    }


    const student1 : Student = {
        Name : "Tofayel",
         age : 27,
         contact: "842387548372198703298",
        gender : "Male",
        address: "Caldenhofer Weg"
    }



 type UserName = string;

 const user : UserName = "Tofayel Ahmed"


 type IsAdmin = boolean ;

 const isAdmin : IsAdmin = false ;




type Add = (num1: number , num2: number ) => number
 const add : Add = (num1, num2) => num1 + num2 ;




}
