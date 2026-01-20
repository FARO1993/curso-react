


const myArray: number[] = [1, 2, 3, 4, 5, 6];

//const myArray2 = structuredClone(myArray);

const myArray2 = [...myArray];

/*myArray.push(7);
myArray.push(8);*/

// myArray.push(true); // Error

myArray2.push(7);

console.log({myArray, myArray2});

for (const myNumber of myArray) {
  console.log(myNumber + 10);
}
