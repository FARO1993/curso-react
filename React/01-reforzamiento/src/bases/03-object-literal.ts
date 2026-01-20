interface Person {
    firstName: string;
    lastName: string;
    age: number;
    addres: Adress;
}

interface Adress {
    postalCode: string;
    city: string;
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    addres: {
        postalCode: 'ABC-12345',
        city: 'New York',
    }
}

const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 18,
    addres: {
        postalCode: 'ABC-303030',
        city: "San Jose"
    }
};

/*const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.addres.city = 'San Jose';*/

console.log(ironman, spiderman); 