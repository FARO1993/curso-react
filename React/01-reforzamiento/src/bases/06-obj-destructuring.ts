const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};


/*const name = person.name;
const age = person.age;
const key = person.key;*/

//Destructuring
const { name, age, key } = person;

console.log({name, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const userContext = (hero: Hero) => {
    return {
        keyname: 'ABC'    
    }
}