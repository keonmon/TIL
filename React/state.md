# React - state (state, setState, useState 등)
- 리액트의 state에 대해 학습하고 정리한다.
---

## 4. state

- App 컴포넌트의 렌더링 결과물에 영향을 주는 내부 상태 데이터
    - 컴포넌트 내부에서 바뀔 수 있는 값.
- 함수 내에 선언된 변수처럼 컴포넌트 안에서 관리

```jsx
// useState() 호출 시 배열이 반환되는데,
//   첫 번째 요소는 현재 상태,
//   두 번째 요소는 상태를 바꿔주는 setter함수이다.
//   useState() 함수 인자는 초기값

const [state, setState] = useState(value);
```

- state 멤버로 정의 (기본타입 및 JSON 정의)
- state는 readOnly
- 컴포넌트의 setState()를 호출할 때 까지 리렌더링하지 않는다.
- setState 호출은 비동기적으로 이뤄진다.

### 4.1. `useState()` 예제1

```jsx
import { useState } from 'react'
import '../App.css'

function App(){
    
    //const title = "Hello"
    // 'Hello'를 '안녕하세요'로 바꾼다.

    // useState change버튼(글씨 변경)
    const [title, setTitle] = useState("Hello")

    // useState '+버튼'(count)
    const [count, setCount] = useState(0);

    return(
        <div>
            {title} // {count}
            <button onClick={ () => setTitle("안녕하세요") }>Change</button><br/>

            <button onClick={ () =>{
                setCount(count+1)
            }}> + </button>
        </div>
    )
}
export default App;
```

![Honeycam 2022-10-20 15-12-11.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3008d704-ca12-4703-9840-a1cb08b6b5d8/Honeycam_2022-10-20_15-12-11.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132313Z&X-Amz-Expires=86400&X-Amz-Signature=34840e6bb116f98e24b0fdfcc1751919b2a113f91732b4d0b1b530d380847c78&X-Amz-SignedHeaders=host&x-id=GetObject)

### 4.2. `useState()` 예제2

```jsx
import { useState } from 'react'
import '../App.css'

function App(){
    
    // useState로 rate 초기값 설정
    const [rate, setRate] = useState(0)

    // 좋아요 버튼
    const plus = ()=>{
        setRate(rate+1);
    }
    // 싫어요 버튼
    const minus = ()=>{
        if(rate > 0)
        setRate(rate-1);
    }

    return(
        <div>
            <h1>{rate}</h1>
            <button onClick={plus}>좋아요</button>
            <button  onClick={minus}>싫어요</button>
        </div>
    )
}
export default App;
```

![Honeycam 2022-10-20 15-10-09.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/19bf7188-6b69-4e8a-9e49-ac7eafc54403/Honeycam_2022-10-20_15-10-09.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132313Z&X-Amz-Expires=86400&X-Amz-Signature=d4b5a15dd334d9f4a547daf98613981cfdc3c759a6943768ead6048ee00b75af&X-Amz-SignedHeaders=host&x-id=GetObject)

### 4.3. `useState()` 예제3

- 입출금 예시

```jsx
import { useState } from "react";

function Mission7 (){
    // A016 이건희

    // 입력하는 금액
    const[money, setMoney] = useState(0)
    // 잔고
    const[wallet, setWallet] = useState(4000)

    // 0보다 큰 정수만 입력하도록 제한
    const onchange = (e)=>{
        if(e.target.value >= 0 )
            setMoney(parseInt(e.target.value))
    }

    // 입금 
    const plus = () =>{
        if(money > 0){
            setWallet(wallet + parseInt(money)) 
            setMoney(0)
        }
    }

    // 출금
    const minus = () =>{
        // 결과가 0보다 크거나 같은경우
        if(wallet - parseInt(money) >= 0){
            setWallet(wallet - parseInt(money)) 
            setMoney(0)
        }else{
            alert('잔액이 부족합니다.')
        }
    }

    return(
        <div>
            잔고: {wallet} <br/>
            <input 
                type="number"
                onChange={ onchange } 
                value = {money}
            />
            <button onClick={ plus } > 입금 </button>
            <button onClick={ minus } > 출금 </button>
        </div>
    )
}

export default Mission7;
```

![Honeycam 2022-10-20 21-53-38.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47cdc2c5-912d-445a-be60-a0ed956b446a/Honeycam_2022-10-20_21-53-38.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221020T132313Z&X-Amz-Expires=86400&X-Amz-Signature=cc3fbd6c34313c6c372eeab528e0482d916e9719254e066c7eb6c8d8e2c0c844&X-Amz-SignedHeaders=host&x-id=GetObject)
