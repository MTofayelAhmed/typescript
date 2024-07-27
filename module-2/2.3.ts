{
  // Generic Type

  type GenericArray<T> = Array<T>;

  // const RollNumbers : number []= [1, 2, 3]

  const RollNumbers: GenericArray<number> = [1, 2, 3];

  // const mentors : string[]= ["Mr. X", "Mr. Y", "Mr. Z"]
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const bollArray: GenericArray<boolean> = [true, false, true];



  const user: GenericArray<{ name: string; age: number }> = [
    { name: "Md. Tofayel", age: 32 },
    {
      name: "Md. Shahjalal",
      age: 32,
    },
  ];

// Generic Tuple 

type GenericTuple<X, Y >= [X, Y]

const manush : GenericTuple<string, string> = ["Mr. X", "Mr. Y"]

type USer = {name: string, age: string}



const user3 : GenericTuple<number, USer >= [123, {name: "John", age: "28"}]










}
