# JavaScript - arguments 가변인자
- JavaScript의 가변인자에 대해 학습하고 정리한다.
---

# 가변인자

- 매개변수의 최대 개수가 지정되지 않은 함수
    - `arguments` 객체
        - 자바스크립트 내부 변수의 기본으로 제공
        - 매개변수의 **배열**

```jsx
function sum() {
    console.log('length: ', arguments.length);
    console.log('index 1: ', arguments[1]);
}
sum(10, 20);

/*
    length:  2
    index 1:  20
*/
```

```jsx
function sumAll(){
    let output = 0;
    for(let i=0; i<arguments.length; i++){
        output += arguments[i];
    }
    return output;
}
console.log(sumAll(1,2,3));
/*
    6
*/
```

```jsx
function concaatAllArgs(){
    let str = '';
    for(let i=0; i<arguments.length; i++){
        str += arguments[i];
    }
    return str;
}
console.log(concaatAllArgs(1,2,3)); // 123
```
