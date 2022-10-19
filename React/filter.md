# React - filter() 필터함수
- React에서 배열을 받아 조건에 만족하는 요소로 다시 배열을 생성하는 함수인 필터함수에 대해 학습하고 정리한다.
---
## **`filter()` :**
-  배열의 각 요소에 대해 callback함수를 호출하여 통과하는(조건에 만족하는) 모든 요소를 모아 새로운 배열을 만드는 함수.

```jsx
// filter : 배열의 각 요소에 대해 callback함수를 호출하여
//           통과하는(조건에 만족하는) 모든 요소를 모아 새로운 배열을 만드는 함수.

const numArray = [12, 6, 8, 130, 44]

// 배열에서 10 이상인 요소로 새로운 배열 생성
console.log(
    numArray.filter(
        num => num >= 10
))
/*
    [12, 130, 44]
*/

//====================
const words = ['spray', 'limit', 'elit', 'exuberant', 'destruction', 'present']
// length가 6보다 큰 단어 filtering

const newWords = words.filter( i => {
    return(i.length > 6)
})
console.log(newWords)
/*
    ['exuberant', 'destruction', 'present']
*/

//====================
// movie의 actor가 kim으로 되어있는 배열을 생성 후 첫번째 movie 정보를 출력
const movies = [
    { img: "img/movie1.jpg", code: 187320, title: "aaa", actor: "kim", genre: "drama, SF" },
    { img: "img/movie2.jpg", code: 191600, title: "bbb", actor: "steave", genre: "romance" },
    { img: "img/movie3.jpg", code: 208077, title: "ccc", actor: "hong", genre: "horror" },
    { img: "img/movie4.jpg", code: 187322, title: "ddd", actor: "kim", genre: "drama, SF" }
]

const kimMovie = movies.filter(movie => movie.actor == 'kim')
console.log(kimMovie[0])
/*
    {
        img: 'img/movie1.jpg', 
        code: 187320, 
        title: 'aaa', 
        actor: 'kim', 
        genre: 'drama, SF'
    }
*/
```
