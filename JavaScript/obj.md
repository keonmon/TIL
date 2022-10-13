# JavaScript - Object 객체
- JavaScript에서 객체타입에 대해 복습하고 정리한다.
---

# 객체

- 관련된 데이터와 함수의 집합

## 1. 객체 생성

```jsx
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.descript = function(){alert('My car is ' + this.model + ', and made by ' + this.make);}

myCar.descript();
```

```jsx
const myCar = {
		make : 'Ford',
		model : "Mustang",
		year : 1969,
		descript : function(){
				alert('My car is ' + this.model + ', and made by ' + this.make);
		}
}

myCar.descript();
```

### 1.1. 예제 1

```jsx
let person = {};

person = {
    name:['bob', 'smith'],
    age: 32,
    gender: 'male',
    interests:['music','skiing'],
    greeting:function(idx){
        alert(`hi I\'m ${this.name[idx]}.`);
    }
}
person.greeting(0);

/*
	hi I'm bob.
*/
```

### 1.2. 예제 2

```jsx
const obj3 = new Object();
obj3.name = "이순신";
obj3.arrayProp = [1,2,3,4,5]
obj3.objectProp = {test:"test1test2"}

let names = "";

for(let name in obj3){
    names += name+"\n";
    console.log(obj3[name])
}

console.log(names)

/*
	이순신
	(5) [1, 2, 3, 4, 5]0: 11: 22: 33: 44: 5length: 5[[Prototype]]: Array(0)
	{test: 'test1test2'}test: "test1test2"[[Prototype]]: Object
	name
	arrayProp
	objectProp
*/
```
