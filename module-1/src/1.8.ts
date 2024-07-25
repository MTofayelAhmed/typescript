{
  const user = {
    id: 1234,
    Name: {
      FirstName: "Md",
      MiddleName: "Tofayel",
      LastName: "Ahmed",
    },
    Phone: "01857348927",
    address: "Uganda",
  };



  const {id, Phone, Name:{MiddleName} } = user


//   array Destructuring 
const myFriends: string[] = ["rachel", "chandler", "Monica", "Phebe"]

const [,,BestFriend]=myFriends

}



