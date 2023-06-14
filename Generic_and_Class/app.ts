/* function apple<T>(a: T): T { }
function apple<T, Q>(a: T, b: Q): T{ }

const apple = <T>(a: T): T => { }
const apple = <T, Q>(a: T, b: Q): T => { }

type apple<T> = (T) => T
type apple<T, Q> = (T, Q) => T


type apple<T> = {
 value: T
}

interface apple<T> {
  value: T
}

class apple<T> {
  constructor(public value: T) { }
}
 */

//////////////////////

/* 
const add = <T>(a: T, b: T): T => a + b
add<number>(1, 2) // 3
add(1, 2) // 3 */

//////////////////////

/*
class Person {
   name: string
   age?: number
}

let he: Person = new Person()
he.name = 'Jack'// 정상 실행
he.age = 32 // 정상 실행
console.log(he) // { name: 'Jack', age: 32 }


let he: Person = new Person()
he.name = 25 // 오류 발생 (Type 'number' is not assignable to type 'string'.)
he.age = 'Noah' // 오류 발생 (Type 'string' is not assignable to type 'number'.)
console.log(he) 
*/

/* class Person {
  constructor(public name: string, public age?: number){ }
}
let he: Person = new Person('jack', 32)
console.log(he) // { name: 'jack', age: 32 } 
*/

//////////////////////

/* 
interface Person {
  name: string
  age?: number
}

class Student implements Person {
  name: string
  age: number
}
 */

//////////////////////////

/*
 abstract class Person {
  abstract name: string
  constructor(public age?: number) { }
}


class Student extends Person {
  constructor(public name: string, age?: number){
    super(age)
  }
}
let jack: Student = new Student('Jack', 32)
console.log(jack) // {name: 'Jack', age: 32} 
*/

//////////////////////////

/* 
class A {
  static initValue = 1 
}

console.log(A.initValue) // 1
 */

////////////////////////

/* 
class A {
  value = 1
  method = function() {
    console.log(`value:${this.value}`)
  }
}

let a: A = new A
a.method() // value:1 */

/* class A {
  value = 1
  method = () => {
    console.log(`value:${this.value}`)
  }
}

let a: A = new A
a.method() // value:1 */

/* class A {
  value = 1
  method() {
    console.log(`value:${this.value}`)
  }
}

let a: A = new A
a.method() // value:1 */

///////////////////////////

/* export const work = <Q, T extends Person<Q>>(a: T) => console.log(a.value) */
/* 
interface Person<T> {
  doing: T
}

class Student<T> implements Person<T> {
  constructor(public doing: T) {}
}

export const print = <T>(a: Person<T>): void => console.log(a.doing);

const seongjin= {
  doing: 1,
  age: 28
}

print<number>(seongjin); */

/////////////////////////////

/* interface Person<T> {
  name: T
}

class Student<T> implements Person<T> {
  constructor(
    public name: T,
    public age: T
  ) {}
}

export const intro = <T>(a: Student<T>): void => console.log(a.age);

intro(new Student("seongjin", 28)); // 오류 발생 (Argument of type 'number' is not assignable to parameter of type 'string')
 */

/////////////////////

/* interface Person<T> {
  name: T
}

class Student<T,Q> implements Person<T> {
  constructor(
    public name: T,
    public age: Q
  ) {}
}

export const intro = <T,Q>(a: Student<T,Q>): void => console.log(a.age);

intro(new Student("seongjin", 28)); // 정상 실행 // 28 */

//////////////////////

/* function intro<T, Q>(name:T, age:Q): void {
    console.log(`My name is ${name} and I'm ${age} years old`);
}

intro("seongjin", 28) // 정상 실행 ("My name is seongjin and I'm 28years old" )

intro("seongjin", "twenty eight") // 정상 실행 ("My name is seongjin and I'm twenty eight years old")
 */

///////////////////

/* function intro<T, Q extends T>(name:T, age:Q): void {
    console.log(`My name is ${name} and I'm ${age}years old`);
}

intro("seongjin", 28) // 오류 발생 (Argument of type 'number' is not assignable to parameter of type 'string'.)

intro("seongjin", "twenty eight") // 정상 실행 ("My name is seongjin and I'm twenty eight years old" )
 */

//////////////////////

/* const create = <T>(type: T): T => new type() // 오류 발생

const create = <T extends {new(): T}>(type: T): T => new type() // 정상 실행

const create = <T>(type: new() => T): T => new type() // 정상 실행
 */

//////////////////////

/* const pick = (obj, keys) => keys.map(key => ({[key]: obj[key]})).reduce((result, value) => ({...result, ...value}), {})

const obj = {name: 'Jane', age: 22, city: 'Seoul', country: 'Korea'}

console.log(pick(obj,['name','agee'])) 
// 정상 실행  // { name: 'Jane', agee: undefined } */

////////////////////////

/* const pick = <T, K extends keyof T>(obj:T, keys: K[]) => keys.map(key => ({[key]: obj[key]})).reduce((result, value) => ({...result, ...value}), {})

const obj = {name: 'Jane', age: 22, city: 'Seoul', country: 'Korea'}

console.log(pick(obj,['name','agee'])) 
// 오류 발생 (Type '"agee"' is not assignable to type '"name" | "age" | "city" | "country"'. Did you mean '"age"'?) */
