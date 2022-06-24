interface Techer {
    readonly firstName: string;
    readonly lastName: string;
    fulltimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [ifAny: string]: any;
}

const teacher3: Techer = {
    firstName: 'John',
    fulltimeEmployee: false,
    lastName: 'Doe',
    location: 'Addis Ababa',
    contract: false,
}

console.log(teacher3['firstName']);