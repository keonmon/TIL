# 실전 JavaScript
* 인프런 강좌 내용을 정리합니다.

## 목차
> [01. var 변수의 문제점](https://github.com/keonmon/TIL/edit/main/JavaScript/%EC%8B%A4%EC%A0%84JavaScript/readme.md#01-var-%EB%B3%80%EC%88%98%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90)    
> [02. const, let 변수의 특징](https://github.com/keonmon/TIL/edit/main/JavaScript/%EC%8B%A4%EC%A0%84JavaScript/readme.md#02-const-let-%EB%B3%80%EC%88%98%EC%9D%98-%ED%8A%B9%EC%A7%95)     


<br>

## 01. var 변수의 문제점
1. 함수 내에서 var 키워드로 정의된 변수는 그 함수 내에서만 사용 가능하다.
```javascript
function example() {
    var i = 1;
}
console.log(i); // error (ReferenceError: i is not defined)
//위 var키워드로 정의된 변수는 함수 스코프이기 때문에 함수를 벗어난 영역에서 사용하면 에러가 발생된다.
```
<br>

2. 함수 내에서 var키워드를 사용하지 않고 변수에 값을 할당하면 그 변수는 전역변수가 된다.
```javascript
// var 변수를 함수가 아닌 프로그램의 가장 바깥에 정의하면 프로그램 전체를 감싸는 전역변수가 된다. 
// 이상한 점은 함수 안에서 var 키워드를 사용하지 않고 변수에 값을 할당하면 그 변수는 전역변수가 된다.
'use strict'
function example1() {
    v = 1;
}
function example2() {
    console.log(v);
}
example1(); // 전역변수 v 생성
example2(); 
/* 
* 'use strict' 선언 전 : 1 (다른 변수에서도 v를 사용할 수 있게된다)
* 'use strict' 선언 후 : error (ReferenceError: v is not defined)
*/
// 이렇게 전역변수가 되는것을 피하기 위해서 파일 최상단에 'use strict'를 선언할 수 있다.
```
<br>

3. 반복문에서 생성된 var변수는 반복문이 끝난 뒤에도 살아있다.
```javascript
// var은 함수 스코프이기 때문에 for문에서 정의된 변수가 반복문이 끝난 이후에도 계속 남아있는 문제가 생긴다.
// for문 뿐만 아니라 while, switch, if문 등 함수 내부에서 작성되는 모든 코드는 같은 문제를 안고있다.
for(var a=0; a<10; a++){
    console.log(a);
}
console.log('last:',a); // last: 10 (for문이 끝난 이후에도 변수a를 읽을 수 있다.)
```
<br>

4. 즉시 실행 함수를 이용한 var 스코프 제한하기
```javascript
// var 변수의 스코프를 제한하기 위해 즉시 실행함수를 사용하기도 한다.
// 즉시 실행 함수 : '함수를 정의하는 시점에 바로 실행하고 사라지는 함수'
// var 변수는 함수 스코프이므로 즉시 실행함수로 묶으면 변수의 스코프를 제한할 수 있기 때문
(function () {
    for (var b = 0; b < 10; b++) {
        console.log(b)      
    }
})();
console.log('last:',b); // error (ReferenceError: b is not defined)
// 즉시 실행 함수는 작성하기도 번거롭고, 가독성이 낮아진다는 점을 생각하면 var 변수의 스코프 문제를 해결하려고 애를 많이 쓰게된다.
```
<br>

5. 직관적이지 않은 hoisting
```javascript
// hoisting : var 키워드로 정의된 변수는 그 변수가 속한 스코프의 최상단으로 끌어올려진다.
console.log(myVar); // undefined (myVar 변수 정의가 최상단으로 올라옴)
var myVar = 1;
// 위와 같이 변수가 정의되기전에 그 변수를 사용해도 hoisting으로 에러가 발생하지 않는다.
// 아래와 같이 코드가 변경됐다고 생각하면 이해하기 쉽다.
var myVar = undefined; 
console.log(myVar); // undefined (myVar 변수 정의가 최상단으로 올라옴)
myVar = 1;

// 특이한점은 hoisting으로 1로 정의되는 것이 아닌 undefined로 정의된다는 점
// var변수는 이렇게 hoisting된 후에 undefined로 값이 할당된다.
// 실제 값(1)은 원래 정의했던 그 위치에서 할당이 된다.

// 아래와 같이 변수가 정의된 곳 위에서 값을 할당할 수 있다. 
// 버그처럼 보이는 이 코드가 에러가 발생하지 않는 다는 것은 큰 문제점이 된다.
// 호이스팅(hoisting)은 직관적이지 않아 코드가 복잡해진다.
console.log(myVar); // undefined
myVar = 2;
console.log(myVar); // 2
var myVar = 1;

// 위 코드는 hoisting으로 아래와 같이 코드가 변경된다고 생각하면 쉽다.
var myVar = undefined;
console.log(myVar); // undefined
myVar = 2;
console.log(myVar); // 2
myVar = 1;
```
<br>

6. 재정의가 가능한 var
```javascript
// var 변수의 이런 특징은 직관적이지 못하고, 버그가 발생하기 쉽다.
var myVar = 1;
var myVar = 2;
console.log(myVar); // 2
```
<br>

7. 재할당 가능한 var 키워드
```javascript
// var는 재할당 가능한 변수로 밖에 만들 수 없다.
var PI = 3.141592;
PI = 123;
// 상수처럼 사용해야할 값(PI)도 무조건 재할당이 가능해버린다.
// 재할당 불가능한 변수를 잘 활용한다면 코드의 복잡도가 낮아지고 가독성이 높아지는데 
// 'const 변수'가 그 역할을 하게된다.
```
<br>

## 02. const, let 변수의 특징
1. 블록스코프 const, let
```javascript
// var와 달리 const는 const와 let은 블록(block) 스코프이다.
// 블록스코프 : if문 안에서 정의된 변수는 if문을 벗어나면 참조할 수 없다.
// 이러한 변수의 특징은 직관적이며 이해하기 쉽다.
if(true){
    const i = 0;
}
console.log(i); // error (ReferenceError: i is not defined)
```
<br>

2. 블록스코프 변수를 같은 이름으로 정의할 경우
```javascript
let foo = 'bar1';
console.log(foo);   // bar1 (바로 위에 정의한 변수를 사용)
if(true){
    let foo = 'bar2';
    console.log(foo);   // bar2 (bar1, bar2 모두 참조할 수 있지만, 우선순위에 따라 가장 가까운 bar2를 사용)
}
console.log(foo);   // bar1 (bar2는 함수스코프 안에 있으므로 bar1만 참조)


```
<br>

3. hoisting
```javascript
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
```
<br>

4. const는 재할당 불가능 / let은 재할당 가능
```javascript
// 재할당이 불가능한 변수는 프로그램의 복잡도를 낮추기 때문에 되도록이면 const를 사용하는게 좋다.
const c = 'a';
c = 'b';    // error (TypeError: Assignment to constant variable.)
var v = 'a';
v = 'b';
let l = 'a';
l = 'b';
```
<br>

5. const로 정의된 객체의 속성값들은 수정가능함.
```javascript
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
```
<br>

6. 내장함수를 사용한 객체 변경 방지 방법
```javascript
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
```
<br>
