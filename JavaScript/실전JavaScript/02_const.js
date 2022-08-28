// - 01 : 블록스코프 const, let
// var와 달리 const는 const와 let은 블록(block) 스코프이다.
// 블록스코프 : if문 안에서 정의된 변수는 if문을 벗어나면 참조할 수 없다.
// 이러한 변수의 특징은 직관적이며 이해하기 쉽다.
if(true){
    const i = 0;
}
console.log(i); // error (ReferenceError: i is not defined)


// - 02 : 블록스코프 변수를 같은 이름으로 정의할 경우
let foo = 'bar1';
console.log(foo);   // bar1 (바로 위에 정의한 변수를 사용)
if(true){
    let foo = 'bar2';
    console.log(foo);   // bar2 (bar1, bar2 모두 참조할 수 있지만, 우선순위에 따라 가장 가까운 bar2를 사용)
}
console.log(foo);   // bar1 (bar2는 함수스코프 안에 있으므로 bar1만 참조)


// - 03 : hoisting
// const, let으로 정의된 변수도 hoisting이 된다. 하지만 변수를 정의하기전에 그 변수를 사용하려고 하면, 참조에러(referenceError)가 발생한다.

console.log(boo);
const boo = 1;  // error (ReferenceError: Cannot access 'boo' before initialization)
// 이는 hoisting 되지 않는 것이 아니라, 아무 값도 할당되지 않은 것이다.

const doo = 1;
{
    console.log(doo);   // error (아래의 변수가 호이스팅되어 참조하는데, 아무값도 할당하지 않아 에러가 발생(아래변수를 주석하면 전역변수를 참조))
    const doo = 2;
}

var voo = 1;
(function(){
    console.log(voo);   // undefined (아래 변수가 호이스팅되었고, undefined가 할당)
    var voo = 2;
})();

// - 04 : const는 재할당 불가능 / let은 재할당 가능
// 재할당이 불가능한 변수는 프로그램의 복잡도를 낮추기 때문에 되도록이면 const를 사용하는게 좋다.
const c = 'a';
c = 'b';    // error (TypeError: Assignment to constant variable.)
var v = 'a';
v = 'b';
let l = 'a';
l = 'b';


// - 05 : const로 정의된 객체의 속성값들은 수정가능함.
// const로 정의된 객체 내부의 속성값을 수정하거나 추가하는 것 모두 가능하다. 
const bar = {prop1:'a'};
bar.prop1='b';
bar.prop2=123;
console.log(bar);   // { prop1: 'b', prop2: 123 }
const arr = [10,20];
arr[0] = 100;
arr.push(300);
console.log(arr);   // [ 100, 20, 300 ]

// 객체 내무의 값도 수정 불가능하게 만들고 싶다면, 'immer'와 같은 외부 패키지를 활용하는 것이 좋다.

// const 객체 변수 자체를 변경하는 것은 불가능하다.
const a = {prop1:'a'};
a = {prop2:123};   


// - 06 : 내장함수를 사용한 객체 변경 방지 방법
// 새로운 객체를 생성하는 편의 기능은 필요없고 단지 수정만 못하게 막고싶다면, 자바스크립트 내장함수를 사용하면 된다.
/** 객체 수정을 내장함수의 종류
 * Object.preventExtensions : 객체 추가 방지
 * Object.seal : 객체 추가, 삭제 불가
 * Object.freeze : 객체 추가, 삭제, 수정 불가
 */

'use strict'
const car = Object.freeze({prop1:'a'});
car.prop1 = 'b';
console.log(car);   // error(TypeError: Cannot assign to read only property 'prop1' of object '#<Object>')