"use strict";
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
Object.defineProperty(exports, "__esModule", { value: true });
// Primitives
let age;
age = 12;
let userName;
userName = "Zenghyun";
let inInstructor;
inInstructor = true;
// More complex types
let hobbies;
hobbies = ["Sports", "Cooking"];
let person;
person = {
    name: "Lee",
    age: 27,
};
let people; // 객체 배열 저장
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
let course = "React - The Complete Guide";
course = 12345;
// Union Type  : 값과 타입을 보다 유연하게 저장할 수 있게 해준다.
// ex string | number
// Functioin & types
// 함수를 사용할 때는 입력 값 뿐만 아니라 반환 값의 타입도 생각해야 한다. 
function add1(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
