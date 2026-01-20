

function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greet2 = (name: string): string => `Hello, ${name}!`;

const message = greet("Facundo");
const message2 = greet2("Martin");


console.log({ message, message2 });


interface User {
    uid: string;
    username: string;
}


function getUser(): User {
    return {
        uid: 'ABC123',
        username: 'facundo.dev'
    }
}

const getUser2 = (): User => ({
        uid: 'ABC456',
        username: 'martin.dev'
});

const user = getUser();
const user2 = getUser2();

console.log({user, user2});

const myNUmbers: number[] = [1,2,3,4,5];

myNUmbers.forEach((n) => {
    console.log({n});
});
