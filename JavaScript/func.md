# JavaScript - 함수
- JavaScript에서 함수에 대해 복습/학습하고 정리한다.
---

# function ; 함수

- function이란 호출에 의해서 실행되거나, 마우스 클릭 등의 이벤트에 의해서 실행할 수 있도록 만든 코드블록

```jsx
</script>
		function sayHello(){
				alert("안녕하세요!");
		}
</script>

<a href="#" onclick="sayHello()">눌러주세요</a>

/*
	안녕하세요!
*/
```

## 1. 함수의 선언 방식

1. 함수 선언문 (함수명 생략 불가능)
2. 함수 표현식 (함수명 생략 가능)
3. Function 생성자 함수
4. 화살표 함수 (람다 expression)

```jsx
// 1. 함수 선언문(함수 이름 생략 불가능)
function add1(x,y){
    return x + y;
}

// 2. 함수 표현식(함수 이름 생략 가능)
var add2 = function(x,y){
    return x+y;
}

// 3. Function 생성자 함수
var add3 = new Function('x','y', 'return x + y');

// 4. 화살표 함수(람다 expression)
var add4 = (x, y) => x + y;

console.log(`add1 : ${add1(2,4)}`);
console.log(`add2 : ${add2(3,5)}`);
console.log(`add3 : ${add3(3,7)}`);
console.log(`add4 : ${add4(3,8)}`);

/*
    add1 : 6
    add2 : 8
    add3 : 10
    add4 : 11
*/
```

```jsx
// 1. 함수 선언문 (함수 이름 생략 불가능)
function factorial(x){
    if(x <= 1)
        return 1;
    return x * factorial(x-1);
}

console.log("함수 선언문 : " + factorial(3));

// 익명함수
var factorial2 = function(x){
    if(x <= 1)
        return 1;
    return x * factorial2(x-1);
}

console.log("함수 literal : " + factorial2(5))

/*
	함수 선언문 : 6
	함수 literal : 120
*/
```

## 2. 내부 함수

- **함수 내부에 정의**된 함수
- **외부 함수의 명령문에서만 액세스** → 함수 이름의 **충돌**을 **방지**하기 위해

```jsx
function addSquares(a, b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b)
}

let a = addSquares(2, 3); // return 13

console.log(a); 

// 13
```

## 3. 고차함수 (higher-order function)

- 인자나 반환값으로 함수를 사용하는 함수
    - **함수**를 **파라미터**로 갖거나, 함수를 **return**

```jsx
function twice(f, x){
	return f(x);
}

function f(x){
	return x * 3;
}

twice(f,7); // f는 함수명

/*
	21
*/
```

```jsx
function outerFunction(){
	const output = 'hello wolrd!'
	return function(msg){
		return output + msg;
	};
}
outerFunction()('123');

/*
    Hello World..!123
*/
```

```jsx
function fun1(op1, op2, f) {
    return f(op1, op2);
}

console.log(fun1( 5, 6, function(op1, op2) { return op1+op2; } ));
console.log(fun1( 5, 6, function(op1, op2) { return op1-op2; } ));
console.log(fun1( 5, 6, function(op1, op2) { return op1*op2; } )); 

// arrow func
console.log(fun1(3, 8, (op1, op2)=>(op1*op2)));

/*
    11
    -1
    30
    24
*/
```
