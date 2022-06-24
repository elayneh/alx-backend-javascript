interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [ifAny: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + "." + lastName;
}

interface mixedInteface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

//The class should be described through an interface
class StudentClass implements mixedInteface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

//The constructor of the class should be described through an Interface
interface constructor {
  new (firstName: string, lastName: string): mixedInteface;
}

const student1: StudentClass = new StudentClass("belayneh", "Getachew");
console.log(student1.displayName());
