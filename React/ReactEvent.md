# React - Event 이벤트리스너, 이벤트핸들러
- React에서 이벤트를 다루는 방법을 학습하고 정리한다.
---

## 2. 이벤트

- 이벤트를 처리하는 방식은 JavaScript 이벤트 처리방식과 유사
- 이벤트 이름은 소문자 대신 **카멜케이스** 사용
- JSX를 사용하여 문자열이 아닌 **함수로 이벤트 핸들러를 전달**, 함수 호출이 아닌 **함수 이름만** 전달.

```jsx
// 기본 js 방식 -> onclick, 함수
<button onclick="activateLasers()">
Activate Lasers
</button>
```

```jsx
// jsx -> onClick -> {함수명}
<button onClick={activateLasers}>
Activate Lasers
</button>
```

- 이벤트 함수는 가급적 arrow function 사용 권장

### 2.1. onClick 이벤트

```jsx
function App(){

    const hi = () =>{
        alert('hi Events!')
    }
    return(
        <div>
            <button onClick={hi}>click</button>
            <button onClick={()=> alert("클릭2")}>클릭</button>
            <button onClick={()=> {
                alert("클릭3")
                alert('클릭4')
            }}>alert 두번</button>
        </div>
    )
}
export default App;
```

### 2.2. submit 이벤트

- `e` :  React가 정의한 **Event 객체**, Web Browser의 Native Event를 감싸는 객체

```jsx
const submit = (e) => {
	e.preventDefault() // 이벤트 진행을 멈춤
	alert('submitted');
};

<form action = 'a.html'>
	<input type="text"></input>
	<button type="submit" onClick={submit}>submit</button>
</form>
```

### 2.3. 양방향 이벤트 - onChange 이벤트

- `e.target.value` : 이벤트가 발생한 대상의 값

```jsx
import { useState } from 'react'
import '../App.css'

function App(){
    const[text, setText] = useState('')

    const updateText=(e)=>{
        setText(e.target.value)
    }

    return(
        <div>
            <form>
                <input onChange={updateText}/>
                <p>{text}</p>
            </form>
        </div>
    )
}
export default App;
```

![Honeycam 2022-10-20 15-23-01.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/afe98c21-69fc-4c01-8039-9581a78ca487/Honeycam_2022-10-20_15-23-01.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132313Z&X-Amz-Expires=86400&X-Amz-Signature=ed5c1c83804395dbc840b21f14ce4c88e81389f3f195b11e280d7b423f9db443&X-Amz-SignedHeaders=host&x-id=GetObject)

```jsx
import { useState } from 'react'
import '../App.css'

function App(){

    const [fruit, setFruit] = useState("사과")

    return(
        <div>
            <select onChange={ (e) => { setFruit( e.target.value )}} value = {fruit}>
                <option value="사과">사과</option>
                <option value="배">배</option>
                <option value="바나나">바나나</option>
            </select>
            <h1>과일 : {fruit}</h1>
            <button onClick={()=>( setFruit("바나나") )}>click</button>
        </div>
    )
}
export default App;
```

![Honeycam 2022-10-20 15-46-45.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31b10e23-0de7-4762-a773-0be8e8a4257c/Honeycam_2022-10-20_15-46-45.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132313Z&X-Amz-Expires=86400&X-Amz-Signature=4c17378f5656ccd50dd27f33fcf2216d2f25d8d331e37f5cf1ee2ea9df3a2cc7&X-Amz-SignedHeaders=host&x-id=GetObject)
