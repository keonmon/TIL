# Javascript - typeof
- JavaScript에서 변수의 자료형을 확인하는 `typeof` 사용법을 기록한다.
---

## `typeof()`

- 자료형을 확인할 때 사용

```jsx
var n1 = 015;
console.log(n1);
console.log(typeof(n1));

var height = 1234E-4;
console.log("height:",height);
console.log("typeof(height) : ",typeof(height));

var condition = true;
console.log("typeof(condition):",typeof(condition));

var hello = '안녕';
console.log("typeof(hello):",typeof(hello));

var ret = null;
console.log("typeof(ret):",typeof(ret));

var n = parseInt("abc");
console.log(n);

var a = [];
console.log("typeof(a):",typeof(a));

var o = {};
console.log("typeof(o):",typeof(o));

var f =  function(){};      // 사용할 때는 f();
console.log("typeof(f):",typeof(f));

/*
	13
	number
	height: 0.1234
	typeof(height) :  number
	typeof(condition): boolean
	typeof(hello): string
	typeof(ret): object
	NaN
	typeof(a): object
	typeof(o): object
	typeof(f): function
*/
```
