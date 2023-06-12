/* let a: object = { name: "seongjin", age: 28 };

a = { city: "Ansan", hobby: "piano" };

console.log(a); */

/////////////////

/* let n: number = 1
n = "hello" // 오류 발생 (Type 'string' is not assignable to type 'number') */

//////////////

/* let n = 1
n = "hello" // 오류 발생 (Type 'string' is not assignable to type 'number')
 */
//////////

/* let n: any = 1
n = "hello"
n = true
n = {}
 */
///////////

/* let a: undefined = undefined;
a = 1 // 오류 발생 (Type '1' is not assignable to type 'undefined')
 */
//////////////////

/* 
let a: object = { name: "seongjin", age: 28 };
a = {name: 24, age: "mingyu"}; // 정상 실행
console.log(a);


  "name": 24,
  "age": "mingyu"
  }    */

///////////////////

/* interface IPerson {
  name: string
  age: number
}

let a: IPerson = { name: "seongjin", age: 28 };

a = {name: 24, age: "mingyu"}; 
// 오류 발생 (Type 'number' is not assignable to type 'string'.)
// 오류 발생 (Type 'string' is not assignable to type 'number'.)

a = {name: 'migyu'}; 
// 오류 발생 (Property 'age' is missing in type '{ name: string; }' but required in type 'IPerson'.)

a = {name: 'migyu', age: 24, city: 'seoul'}; 
// 오류 발생 (Object literal may only specify known properties, and 'city' does not exist in type 'IPerson'.)

a = {name: 'migyu', city:'seoul'}; 
// 오류 발생 ( Object literal may only specify known properties, and 'city' does not exist in type 'IPerson'.)

a = {name: 'mingyu', age: 24}; // 정상 실행 */

///////////////////

/* let a: {
  name: string
  age: number
} = { name: "seongjin", age: 28 };

a = {name: 'mingyu', age: 24}; // 정상 실행

 a = {name: 24, age: "mingyu"}; // 오류 발생


// 함수를 구현할 때 쓸 수도 있음.
function print(me: {name: string, age: number, etc?: boolean}) {
  console.log(me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`)
}

let a = {name: 24, age: "mingyu"};
print(a) // 오류 발생 (Type 'number' is not assignable to type 'string'.)

let a = {name: "mingyu", age: 24};
print(a) // 정상 실행  */

////////////////

/* function add(a: number, b: number) {
  return "result is " + a + b 
}
add(1, "hello") // 오류 발생 (Argument of type 'string' is not assignable to parameter of type 'number'.)

add(1, 2) // 정상 실행 ("result is 12") */

////////////////////////////

/* function add(a: number, b: number): number {
  return "result is" + a + b 
}
add(1, 2) // 오류 발생 (Type 'string' is not assignable to type 'number'.)

 */

////////////

/* type Person = (string, number) => void
let print:Person = function( name: string, age: number ): void { console.log(name, age) }

let print:Person = function( name, age ) { console.log(name, age) }
 */
///////////

/* 
let add = function(a: number, b:number) {return a + b}
console.log(add(1, 2)) // 3

 */
