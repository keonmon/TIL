# React - Router (Routes, Route, Link, BrowserRouter 등)
- 리액트에서 SPA(Single Page Application)를 구현한 기술인 라우팅에 대해 학습하고 정리한다.
---

# 1. React - 라우팅

## 1.1. 개요

- 웹 애플리케이션에서 라우팅 개념은 사용자가 요청한 url에 맞는 페이지를 보여주는 것
- 여러 페이지로 구성된 웹 애플리케이션을 **하나의 페이지로 구성**할 수 있다.
- **SPA(Single Page Application) :**
    - 하나의 페이지로 이루어진 애플리케이션
    - **SPA**를 한 번만 다운로드하여 실행하고, 이후에는 **필요한 데이터만 서버로부터 받아 화면에 업데이트**한다.
- **React-router**를 사용해 손쉽게 SAP를 구현할 수 있다.
    - **설치** 방법
        - `npm i react-router-dom`

### 1.1.1. React Router component

- `<Route>` : URL 경로와 매칭될 경우 보여줄 컴포넌트를 지정
    - `path` 속성에 **경로**를 지정
    - `element` 속성에 **보여줄 화면(컴포넌트)**를 지정
    - `<Route>`는 **<Routes>의 하위 자식**이어야 한다.
    - `<Routes>`에는 **<Route>만 사용 가능**하다.
    
    ```jsx
    <Routes>
    	<Route path="/about" element={<About />} />
    	<Route path="/board" element={<Board />} />
    </Routes>
    ```
    
    - URL 매칭 실패시 어떤 컴포넌트도 렌더링되지 않고 경고가 발생한다
- 하위 모든 컴포넌트에서 라우터 기능을 사용하려면 **App컴포넌트를 `<BrowserRouter>` 컴포넌트를 하위로 설정**한다.
    
    ```jsx
    // inner index.js
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    		<BrowserRouter>
    		    <App/>
    		</BrowserRouter>
    );
    ```
    

### 1.1.2. 주소 이동

- **`<Link>`**
    - html의 **<a>와 유사**
    - **정적 주소 이동**
    - `to=""` 속성을 사용해 **이동 경로 지정**

```jsx
<Link to="/about">
	about
</Link>
```

- `useNavigate()`
    - **함수** 호출을 통해 **주소 이동**
    - **동적 주소 이동**
    - **뒤로가기 가능**하다.
    - `useNavigate()` 훅을 사용하고 함수를 호출해 주소 이동

```jsx
const navigate = useNavigate();
<button onClick={() => navigate(' /home ')} Home으로 가기 <button/>
<button onClick={() => navigate(-1)} 뒤로 가기 <button/>
```

- ⛔**주의사항**⛔
    - `Link`, `useNavigate()`를 사용하지 않고, `<a>`를 사용하면 **reload되며 모든 state값이 초기화**된다.
    

## 1.2. 예제1

- Link태그와 Routes, Route 사용 예제
- SPA방식이기 때문에 동적으로 바뀌는 부분만 렌더링된다. (비동기)
    - 참조 : [https://velog.io/@devjade/2주-프로젝트-다이어리-새로고침해야-axios-POST요청이-반영될-때-해결법](https://velog.io/@devjade/2%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8%ED%95%B4%EC%95%BC-axios-POST%EC%9A%94%EC%B2%AD%EC%9D%B4-%EB%B0%98%EC%98%81%EB%90%A0-%EB%95%8C-%ED%95%B4%EA%B2%B0%EB%B2%95)

**src/router/AppBasic2.js**

```jsx
// 필요한 리소스 import
import {Link, Routes, Route} from "react-router-dom";

// page이동을 위한 Link를 생성
const Menu = () =>{
    return(
        <div>
            <Link to="/page1"> page1 </Link>&nbsp;
            <Link to="/page2"> page2 </Link>&nbsp;
            <Link to="/page3"> page3 </Link><hr/>
        </div>
    )
}

const Page1 = ({style}) => <span style={style}> page11111 </span>
const Page2 = ({style}) => <span style={style}> page22222 </span>
const Page3 = ({style}) => <span style={style}> page33333 </span>

const Image = ()=>(
    <img src="img/i016335129138.gif" width="250px"></img>
)

function App(){
    const bgColor = (color) => (
        {backgroundColor : color}
    )

    return(
        <div>
            <Menu/>
            <table>
            
                <tr>
                    <td><Image/></td>
                    <td>
                    <Routes >
                        <Route path="/" element="이동하고 싶은 링크를 선택하세요"/>

                        {/* element에는 path에서 보여줄 '컴포넌트를 선택'하거나, '내용을 직접 입력'한다. */}
                        <Route path="/page1" element={ <Page1 style={bgColor("beige")}/> }/>
                        <Route path="/page2" element={ <Page2 style={bgColor("#5EEBF7")}/> }/>
                        <Route path="/page3" element={ <Page3 style={bgColor("#4AE0C3")}/> }/>
                    </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default App;
```

**src/index.js**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './router/AppBasic2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

![Honeycam 2022-10-20 12-51-26.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eba1fcf3-4f8c-4f61-835d-6576fd9f2829/Honeycam_2022-10-20_12-51-26.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132312Z&X-Amz-Expires=86400&X-Amz-Signature=c62b8e8b934b5bc5db2c70ae11c8cd75b49d5de02baa8271fc7cac32d646e5b5&X-Amz-SignedHeaders=host&x-id=GetObject)
