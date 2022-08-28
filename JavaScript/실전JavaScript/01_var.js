
// - 01 함수 내에서 var 키워드로 정의된 변수는 그 함수 내에서만 사용 가능하다.
function example() {
    var i = 1;
}
console.log(i); // error (ReferenceError: i is not defined)
//위 var키워드로 정의된 변수는 함수 스코프이기 때문에 함수를 벗어난 영역에서 사용하면 에러가 발생된다.


// - 02 함수 내에서 var키워드를 사용하지 않고 변수에 값을 할당하면 그 변수는 전역변수가 된다.
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


// - 03 : 반복문에서 생성된 var변수는 반복문이 끝난 뒤에도 살아있다.
// var은 함수 스코프이기 때문에 for문에서 정의된 변수가 반복문이 끝난 이후에도 계속 남아있는 문제가 생긴다.
// for문 뿐만 아니라 while, switch, if문 등 함수 내부에서 작성되는 모든 코드는 같은 문제를 안고있다.
for(var a=0; a<10; a++){
    console.log(a);
}
console.log('last:',a); // last: 10 (for문이 끝난 이후에도 변수a를 읽을 수 있다.)


// - 04 : 즉시 실행 함수를 이용한 var 스코프 제한하기
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


// - 05 : 직관적이지 않은 hoisting
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


// - 06 : 재정의가 가능한 var
// var 변수의 이런 특징은 직관적이지 못하고, 버그가 발생하기 쉽다.
var myVar = 1;
var myVar = 2;
console.log(myVar); // 2


// - 07 : 재할당 가능한 var 키워드
// var는 재할당 가능한 변수로 밖에 만들 수 없다.
var PI = 3.141592;
PI = 123;
// 상수처럼 사용해야할 값(PI)도 무조건 재할당이 가능해버린다.
// 재할당 불가능한 변수를 잘 활용한다면 코드의 복잡도가 낮아지고 가독성이 높아지는데 
// 'const 변수'가 그 역할을 하게된다.