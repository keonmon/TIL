# React - Component 컴포넌트
- React에서 모듈화, 캡슐화 개념인 Component에 대해 공부하고 정리한다.
---

# 1. React - 컴포넌트(Component)

## 1.1. 컴포넌트란?

- **사용자가 볼 수 있는 요소**를 나누어 놓은 것.
- UI를 **재사용** 할 수 있도록 **개별적인 여러 모듈로 캡슐화**
- 리액트에서 개발할 모든 애플리케이션은 **컴포넌트**라는 조각으로 구성됨.

## 1.2. 재사용 가능한 컴포넌트 단위

- 작고 재사용할 수 있도록 구성된 모듈
- 대규모 애플리케이션을 구축할 수 있게 해주는 추상적 개념
- 다른 템플릿(뷰, HTML)에서 컴포넌트를 추가할 수 있다(사용자 정의 태그)

- 예제1

```jsx

function TodoItem() {
	return(
		<li>할일 항목 하나입니다.</li>
	);
}

function App3() {
	return (
		<div>
			<ol>
				<TodoItem></TodoItem>
				<TodoItem></TodoItem>
			</ol>
		</div>
	);
}
```

- 예제2
    
    ![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F357f966e-6430-449b-a901-9a5fa761ada4%2FUntitled.png?table=block&id=f1e92e1f-c707-470b-ac3e-288e5943ebee&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1240&userId=&cache=v2)
    

```jsx
// 함수로 컴포넌트를 생성
function Subject() {
    return(
        <header>
            <h1>Web</h1>
            World Wide Web
        </header>
    )
}

// 변수로 컴포넌트 생성
const TOC = ()=>(
    <nav>
        <ul>
            <li><a href="#">html</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
    </nav>
)

const Contents = ()=>{
    return (
        <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>
    )
}

function App(){
    // mainComponent 밖에서 생성된 컴포넌트(변수, 함수)는 태그로 호출
    return(
        <div>
            <Subject/>
            <TOC/>
            <Contents/>
        </div>
    )
}

export default App;
```
