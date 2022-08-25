# 자바스크립트 정리
> 헷갈리거나 기록하고 싶은 내용을 정리합니다.


## document 객체
* HTML태그 select 
```javascript
document.getElementById('[태그id]');
```

* 태그안에 표출할 것들 삽입
```javascript
document.getElementById('[태그id]').innerHTML = [샬라샬라]
```


## 객체 Type
* 객체 배열에 객체 추가 방법
```javascript
// push()
객체명.push([
    { 
        key : value,
        ...
    },
    {
        ...
    }
]);
```

* 객체에 요소 추가 방법
```javascript
// 또는 spread 연산자로 객체 병합 (...)
const rectangle = {
    radius: 10
};
const style = {
    Backcolour: 'red'
};
const solidRectangle = {
    ...rectangle,
    ...style
};
```
