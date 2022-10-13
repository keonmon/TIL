# JavaScript - loop 반복문
- JavaScript에서 반복문에 대해 복습하고 정리한다.
---

# 반복문

## 1. for … of 문

- value에 접근

```jsx
for(variable of iterable){
		statement
}

// 활용
const arr1 = ['a','b','c','d','e'];

for(let i of arr1){
    console.log(i)
}
/*
	a
	b
	c
	d
	e
*/
```

## 2. for … in 문

- key에 접근

```jsx
const obj = {a:1,b:2,c:3};
for(const prop in obj){
    console.log(`obj[${prop}] = ${obj[prop]}`);
    console.log(prop)
    console.log(obj[prop])
}
// const prop 에는 key값이 저장된다.
// value에 접근할 때는 객체[key]로 접근

/*
	obj[a] = 1
	a
	1
	obj[b] = 2
	b
	2
	obj[c] = 3
	c
	3
*/
```
