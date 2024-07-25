{
  let age: number = 15;

  // if (age>=18){
  //     console.log("Adult")

  // } else{
  //     console.log("Not Adult")
  // }

  // const isAdult = age >= 18 ? "Adult": "NotAdult"

  // console.log(isAdult)

  // null undefined Decision Making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    Address:{
        address: {
            road: string;
            presentAddress: string;
            permanentAddress?: string;
          }
    }
    ;
  };

  const user: User = {
    name: "Tofayel",
    
      Address: {
        address: {
            road: "awesome Road",
            presentAddress: "NotAwesomeRoad Ctg",
      }
    
    },
  };

const permanentAddress = user?.Address?.address.permanentAddress
console.log({permanentAddress})




}
