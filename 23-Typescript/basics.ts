// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Zenghyun";

let inInstructor: boolean;

inInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Lee",
  age: 27,
};

let people: Person[]; // 객체 배열 저장

people = [
  {
    name: "Lee",
    age: 25,
  },
  {
    name: "Kim",
    age: 26,
  },
  {
    name: "Park",
    age: 27,
  },
];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;

// Union Type  : 값과 타입을 보다 유연하게 저장할 수 있게 해준다.

// ex string | number

// Functioin & types
// 함수를 사용할 때는 입력 값 뿐만 아니라 반환 값의 타입도 생각해야 한다.
function add1(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Generic
// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }
 
//  updatedArray의 타입이 number[]라고 유추할 수 있지만 함수에서 array를 any[] 타입으로 받았기 때문에 updatedArray의 타입도 any가 된다. 이런 문제에 대비해서 Generic를 사용한다. 
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
  }


const demoArray = [1, 2, 3]; 

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3];

const stringArray = insertAtBeginning(['a','b'], 'c');



