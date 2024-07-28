{

// conditional type


type a1 = number ;
type a2 = string;


type c = a1 extends number ? true : false ;

type d = a1 extends null ? true : a2 extends string ? true : false;
















}