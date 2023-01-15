/*La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente 
desde un objeto. */
const user = { name: 'John Doe', age: 34 };

//const name = user.name;
//const age = user.age;

//Desestructuración
const { name, age } = user;
//Usa sintaxis de desestructuración para asignar variables desde objetos
const user2 = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user2;
console.log(userName);
//desestructuración para asignar variables desde objetos anidados
const user3 = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
  const { johnDoe: { age: userAge2, email: userEmail }} = user3;
console.log(userAge2);

//desestructuración para asignar variables desde arreglos
let a = 8, b = 6;
 [a,b]=[b,a];

 //Desestructuración vía elementos rest
