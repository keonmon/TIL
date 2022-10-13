# JavaScript - Array 배열
- JavaScript의 배열에 대해 복습하고 정리한다.
---
# 배열

## 1. 배열 리터럴(literal) 대괄호를 사용하여 만드는 방법

```jsx
const arr = [요소1, 요소2, 요소3 ... ];

//1. literal
const arr1 = ['a','b','c','d','e'];

for(let i of arr1){
    console.log(i)
}

let string = '';
arr1.forEach(item => {
    string += item;
});
console.log(string);

// stack 매서드 사용
arr1.push('f');
console.log("after push('f') => ",arr1);

arr1.pop();
console.log("after push => ",arr1);

/*
	a
	b
	c
	d
	e
	abcde
	after push('f') =>  Array(5)
	after push =>  Array(5)
*/
```

## 2. Array 객체 활용

```jsx
//2. Array 객체 생성자 활용
const arr2 = Array(1, true, 'JavaScript');
console.log("arr2 : ", arr2)

//3. new 연산자를 이용한 Array 객체 생성
const arr3 = new Array(1, false, 'Web')
console.log("arr3 : ", arr3)

const arr4 = new Array();
arr4[0] = 'zero';
arr4[1] = 'one';
arr4[2] = 'two';
arr4[3] = 'three';
console.log("arr4 : ", arr4)

/*
	arr2 :  Array(3)
	arr3 :  Array(3)
	arr4 :  Array(4)
*/
```
