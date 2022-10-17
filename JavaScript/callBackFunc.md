# JavaScript - callBackFunction 콜백함수
- JavaScript에서의 콜백함수를 학습하고 정리한다.
---

# Callback 함수

- 다른 함수에 인자로 전달되는 함수

```jsx
function repeat10(func){
    for(let i = 0; i < 10; i++){
        func();
    }
}
function hiMsg(){
    return console.log("hi~~");
}
//repeat10(hiMsg);
repeat10(()=>console.log('hi~~')) // arrow func

/*
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
    hi~~
*/
```

## 1. forEach에서의 callback

```jsx
const arr = ['a', 'b', 'c', 'd'];
arr.forEach(
    function(item, index, arr){
    console.log(`item:${item}, index:${index}, arr:${arr}`);
});

arr.forEach(
    (item, index, arr) => {
    console.log("item: ", item, ", index: ", index, arr)
    
});
/*
    item:a, index:0, arr:a,b,c,d
    item:b, index:1, arr:a,b,c,d
    item:c, index:2, arr:a,b,c,d
    item:d, index:3, arr:a,b,c,d
    item:  a , index:  0 (4) ['a', 'b', 'c', 'd']
    item:  b , index:  1 (4) ['a', 'b', 'c', 'd']
    item:  c , index:  2 (4) ['a', 'b', 'c', 'd']
    item:  d , index:  3 (4) ['a', 'b', 'c', 'd']
*/
```

```jsx
const animals=[
    {
        name: "lion",
        size: "big",
        weight: 200
    },
    {
        name: "element",
        size: "big",
        weight: 500
    },
    {
        name: "rabbit",
        size: "small",
        weight: 50
    },
    {
        name: "mouse",
        size: "small",
        weight: 10
    }
]

animals.forEach(
    (element)=>{
        console.log(element.name)
    }
);
/*
    lion
    element
    rabbit
    mouse
*/

animals.forEach(
    (element, index)=>{
        console.log(element.name + '/' + index)
    }
);
/*
    lion/0
    element/1
    rabbit/2
    mouse/3
*/
```
