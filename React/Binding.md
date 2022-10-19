# React - Binding 바인딩
- 리액트의 여러가지 바인딩 방법에 대해 학습하고 정리한다.
---


## 1. 데이터 바인딩

- **src/basic/AppBind1.js**

```jsx
import './App.css';

function App() {
    const title ='레미제라블';
    const rate = 5;
  return (
    <div>
        제목 : {title} / 평점 : {rate}
    </div>
  );
}

export default App;

/*
	제목 : 레미제라블 / 평점 : 5
*/
```

- **src/index.js**

```jsx
import App from './basic/AppBind1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 2. 함수 바인딩

```jsx
function App() {
    const name = '홍길동';
    const age = 5;
    const person={
        name:'hongildong',
        age:20
    };

    const print = () =>(
        `name : ${name}, age: ${age}`
    )
    const print2 =(person)=>(
        `name : ${person.name}, age: ${person.age}`
    )

    return (
        <div>
            { print() } <br/>
            { print2(person) } <br/> 
        </div>
    );
}

export default App;
```

## 3. 객체 바인딩

```jsx
function JSONBind() {
    const movies=[
    {title:'특송', genre:'스릴러',rate:4},
    {title:'웨스트사이드스토리', genre:'드라마',rate:5}
    ];
    
    const getMovie = (index)=>(movies[index]);
    const movie = getMovie(0);

    return (
        <div>
            <table>
                <tr><th>제목</th><td>{movies[0].title}</td></tr>
                <tr><th>장르</th><td>{movies[0].genre}</td></tr>
                <tr><th>평점</th><td>{movies[0].rate}</td></tr>
            </table>
            <hr/>
            <table>
                <tr><th>제목</th><td>{getMovie(1).title}</td></tr>
                <tr><th>장르</th><td>{getMovie(1).genre}</td></tr>
                <tr><th>평점</th><td>{getMovie(1).rate}</td></tr>
            </table>
            <hr/>
            <table>
                <tr><th>제목</th><td>{movie.title}</td></tr>
                <tr><th>장르</th><td>{movie.genre}</td></tr>
                <tr><th>평점</th><td>{movie.rate}</td></tr>
            </table>
        </div>
    );
}

export default JSONBind;
```

## 4. 속성 바인딩

```jsx
function JSONBind() {
    const inputType="text"
    const inputValue="나의 깃허브"
    const link = "https://github.com/keonmon"
    const goLink = (rep)=>(
        `${link}/${rep}` 
    )

    return (
        <div>
            <input type={inputType} value={inputValue}></input>
            <br/>
            <a href={link} target='_blank'>깃 메인</a>
            <br/>
            <a href={goLink("TIL")} target='_blank'>TIL(repo)</a>
        </div>
    );
}

export default JSONBind;
```

## 5. 선택적 바인딩

### 5.1. 논리연산자를 이용한 제어

- 데이터가 표시되는지 여부를 제어할 수 있다.
- 논리연산자를 이용해 표시여부를 제어할 수 있음
- 여러번 사용해 switch형태의 다중 조건 처리 가능
- return문에서 `{ condition && result }` 방식으로 선택적 바인딩을 한다.

```jsx
function App() {
    const people = [
        {name: '신사임당', age: 45, gender: 'female'},
        {name: '임꺽정', age: 60, gender: 'male'}
    ];
    
    const code = 0;

    // return문에는 { condition && result } 방식으로 선택적 바인딩을 한다.
    return (
        <div>
            {people[0].age > 50 && <h1> {people[0].name}</h1>}
            {people[1].age > 50 && <h1> {people[1].name}</h1>}

            {code === 0 && <div>안녕하세요</div>}
            {code === 1 && <div>hi</div>}
            {code === 2 && <div>hello</div>}
            {code === 3 && <div>안녕?</div>}
        </div>
    );
}
export default App;

/*
    임꺽정
    안녕하세요
*/
```

### 5.2. 3항 연산자를 이용한 제어

- `{ condition ? true : false }` 방식의 **3항연산자를 사용**함으로써 선택적 바인딩을 한다.
- 세가지 방식의 예제를 확인해보자

```jsx
function JSONBind() {
    const people = [
        {name: '신사임당', age: 45, gender: 'female'},
        {name: '임꺽정', age: 60, gender: 'male'}
    ];
    
    // {condition ? true : false } 방식의 3항연산자를 사용함으로써 선택적 바인딩을 한다. 
    return (
        <div>
            
						...

            {people[0].name} :
                <img src={
                    people[0].gender === 'male' ? 'img/male.jpg' : 'img/female.jpg' 
                }
                width="50" alt='male.jpg'/>

                <br/>
            {people[1].name}:
                <img src={
                    `img/${people[1].gender === 'male' ? 'male.jpg' : 'female.jpg'}`
                }
                width="50" alt='female.jpg' />

                <br/>
            {people[1].name}:
                {
                    people[1].gender === 'male' ?
                    <img src='img/male.jpg' width='50' alt='male.jpg'/> :
                    <img src='img/female.jpg' width='50' alt='female.jpg'/>
                }
        </div>
    );
}

export default JSONBind;

/*
    신사임당 :male.jpg
    임꺽정:female.jpg
    임꺽정:male.jpg
*/
```

## 6. 배열 객체 바인딩

- `map()`과 `filter()` 를 먼저 공부해야한다.

### 6.1. `map()`, `filter()`

- javascript 함수인 `map()`과 `filter()` 함수를 먼저 알아보자

- *`**map()` :** 어떠한 배열에 대해 다른 형태의 배열을 새로 만든다.*
- map 함수와 arrow함수를 사용해 배열 객체에 바인딩이 가능하다.

```jsx
// map : 어떠한 배열에 대해 다른 형태의 배열을 새로 만든다.
const arr1 = [1,2,3,4,5];

const double = arr1.map((item)=>{
    return item*2;
})

console.log(double);
/*
    [2, 4, 6, 8, 10]
*/

//==============================
// 섭씨 -> 화씨 변환 예제

const celsius = [-4,2,10,30]

// fahrenheit = celsius * 1.8 + 32

const fahrenheit = celsius.map( i => {
    return i * 1.8 + 32
});

console.log(fahrenheit)

/*
    [24.8, 35.6, 50, 86]
*/

//=====================================
// 객체배열 예제
// 동물의 이름으로 새로운 배열 생성
const animals = [
    {name : "lion", size:"big", weight:200},
    {name : "elephant", size:"big", weight:500},
    {name : "rabbit", size:"small", weight:50},
    {name : "mouse", size:"small", weight:10}
]
const animalsName = animals.map(animal => animal.name)
console.log(animalsName)
/*
    ['lion', 'elephant', 'rabbit', 'mouse']
*/

// 위 객체배열로 문장 만들기 예제
const string = animals.map(animal =>{
    return `animal's name is ${animal.name}, and it's size is ${animal.size}`
})
console.log(string);

/*
    0: "animal's name is lion, and it's size is big"
    1: "animal's name is elephant, and it's size is big"
    2: "animal's name is rabbit, and it's size is small"
    3: "animal's name is mouse, and it's size is small"
*/
```

- 배열 원소 개수만큼 여러번 반복해야할 때 요소를 구분할 수 있는 key속성의 정의가 필요하다.

- `**filter()` :** 배열의 각 요소에 대해 callback함수를 호출하여 통과하는*(조건에 만족하는)* 모든 요소를 모아 새로운 배열을 만드는 함수.

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

### 6.2. `map()`을 사용한 객체배열 바인딩

- 예제1

```jsx
function App() {
    const items = [
        {id:1, name:'사과', price:100},
        {id:2, name:'바나나', price:200},
        {id:3, name:'배', price:300},
        {id:4, name:'포도', price:400},
        {id:5, name:'토마토', price:500}
    ];

    return (
        <div>
            {items.map(item => {
                return (
                    <p key={item.id}>
                        {item.name}  --- price : {item.price}
                    </p>
                )
            })}
        </div>
    );
}

export default App;

/*
    사과 --- price : 100
    바나나 --- price : 200
    배 --- price : 300
    포도 --- price : 400
    토마토 --- price : 500
*/
```

- 예제2

```jsx
function App() {
    const people = [
        {id:1, name: '신사임당', num: 2022, src: 'img/female.jpg'},
        {id:2, name: '임꺽정', num: 2010, src: 'img/male.jpg'}
    ];

    return (
        <div>
            <table>
                <thead><th>이름</th><th>성별</th><th>학번</th></thead>
                <tbody>
                    {people.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td><img src={item.src} width="50"/></td>
                                <td>{item.num}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27a34a05-9539-4162-9f90-ad6979d79c05%2FUntitled.png?table=block&id=11d7055f-8517-4539-b3c4-02e6cd851b7a&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=360&userId=&cache=v2)

## 7. CSS 바인딩

- Object 형식으로 만들어서 직접 태그에 넣는 방식의 스타일 방식 지원(css문법이 아님)
    - 표현을 사용할 수 없기 때문에 **font-size는 fontSize로 표현**한다.
- ES6에서는 class키워드이기 때문에 **className을 사용해 class에 바인딩**한다.
- css파일은 import 구문을 사용해 로딩한다.

```jsx
import '../App.css';

function App() {

    // 기존 css에서 '-'가 들어가는 스타일명은 카멜형식으로 변경된다.
    const tempStyle = {
        display : "inline-block",
        height : "100px",
        fontSize : "30px",
        backgroundColor:"orange"
    }
    
    // jsx에서는 class가 아닌 className으로 태그 class를 부여한다.
    // 태그의 style속성에 들어갈 변수를 object타입으로 선언 후 부여한다.
    return (
        <div>
            <div className='App'>Hello~!</div>
            <div className='box-info mg-10'> 안녕하세요~! </div>
            <div style={tempStyle}> 으하하~! </div>
        </div>
    );
}

export default App;
```

- App.css

```css
.App {
  text-align: center;
}

/* AppCSS.js */
.box-info{
  background-color : yellow;
}

.mg-10{
  margin : 10px;
}

...
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fc796c5-65a2-4133-b92d-89f9378a2c84%2FUntitled.png?table=block&id=4c000fee-b334-4ee1-ba84-8bfe79c27afc&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=740&userId=&cache=v2)
