{
  // inheritence

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(NumberOfHours: number) {
      console.log(` ${this.name} will sleep for ${NumberOfHours}`);
    }
  }




  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

  }

  const student1 = new Student("mr. x", 26, "Bangladesh");

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(NumberOfHours: number) {
      console.log(` ${this.name} will sleep for ${NumberOfHours}`);
    }

    takeClass(NumberOfClass: number) {
      console.log(`${this.name} will take ${NumberOfClass} classes`);
    }
  }

  const teacher1 = new Teacher("mr. x", 26, "Bangladesh", "Physics Teacher");
}
