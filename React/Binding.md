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
