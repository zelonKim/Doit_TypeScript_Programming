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
