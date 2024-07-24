{
// rest operator , spread operator


let bros1 : string[]= ["tofayel", "Arif", "Mahtab"]
let bros2: string[]= ["shahjalal", "sanjoy", "Babu"]

// let brosList = [...bros1,...bros2]

bros1.push(...bros2)


let mentors1 = {
    typeScript : "Mezba",
    Redux : "Mir"
}
let mentors2 = {
    next: "tonmay",
    cloud: "Nadid"
}

const mentorList = {
    ...mentors1, ...mentors2
}


// rest operator

const greetFriends = (...friends : string[])=> {
    friends.forEach((friend: string) => `Hi ${friend}`)
}

greetFriends("Abul", "Barakat")


}