{

    class Animal {
        // name: string;
        // species: string;
        // sound: string;


        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species= species;
            // this.sound = sound
        }

        makeSound(){
            console.log(`the animal ${this.name} sounds ${this.sound}`)
        }


    }

    // parameter properties 



    const Dog = new Animal("German Shephards", "DOg", "Ghew Ghew")
   const cat = new Animal("Persian", "Cat", "Meaw meaw")

   cat.makeSound()








}