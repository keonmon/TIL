# React - props 프롭스
- 리액트에서 컴포넌트에 값, 속성값을 전달할 때 사용하는 `props`에 대해 학습하고 정리한다.
---


## 1. Props 프롭스

- **Prop**ertie**s**.
- **컴포넌트에 전달되는 데이터.**
- **컴포넌트의 속성을 설정**할 때 사용하는 요소
- 컴포넌트 사용시 특정 값을 전달하고 싶을 때 사용

- **다수의 속성 정의 가능**
    - `<Time type = “AM” name=”이순신”/>`
- `**{` `}` 를 사용해 javascript 표현식 전달**
    - `<Time type={data}/>`
- **object (객체) 타입을 직접 입력하여 전달 가능**
    - `<Time Type={{id:7}}/>`
- `**Component.defaultProps`로 default 속성값을 지정할 수 있다.**

- **예제1**
    - 속성으로 직접 값을 입력

```jsx
const Time = (props) =>(
    <div> type : {props.type}, name: {props.name} </div>
)

// Time컴포넌트에 default 값 지정
Time.defaultProps = {
    type:'AM',
    name:'자명종'
}

function App(){
    return(
        <div>
            {/* 다수 속성 정의 */}
            <Time type="PM" name="Clock"/>
            <Time/>
        </div>
    )
}

/*
    type : PM, name: Clock
    type : AM, name: 자명종
*/
export default App;
```

- **예제2**
    - City2 → 컴포넌트에서 배열로 받는다.
    - City3 → json타입의 데이터를 속성으로 전달.

```jsx
// props는 객체에 담겨 가져온다
const City = (props) =>(
    <div> {props.country}, {props.state} </div>
)

const City2 = ({country, state}  ) =>(
    <div> {country}, {state} </div>
)

// json을 전달받아 리턴
const City3 = ({data}) => (
    <div>{data.country}, {data.state}</div>
)

function App(){
    const data = {
        "country" : "미국",
        "state" : "텍사스"
    }

    return(
        <div>
            {/* 여기서 정의된 속성이 객체(object)에 담겨 컴포넌트로 전달된다. */}
            <City country="대한민국" state="경기도"/>
            <City2 country="미국" state="워싱턴"/>

            {/* json 전달 */}
            <City3 data={data} />

        </div>
    )
}

/*
    대한민국, 경기도
    미국, 워싱턴
    미국, 텍사스
*/
export default App;
```

- **예제3**
    - Add → 정수를 직접 전달하여 연산을 수행

```jsx
// 정수를 전달 받아 연산 후 리턴
function Add(props){
    return props.op1 + props.op2
}

function App()
    return(
        <div>
            {/* 정수를 전달 */}
            <Add op1={2} op2={4}/>
        </div>
    )
}

/*
    6
*/
export default App;
```

- **예제4**
    - Welcome   → 속성을 직접 입력
    - Welcome2 → 객체 타입의 data 전달

```jsx
const Welcome = (props) => {
    return(
        <div> Hello~ {props.name}, your id is {props.id}</div>
    )
}
// 객체를 전달받아 props 제어
const Welcome2 = ({data}) =>(
    <div>Hello~ {data.name}, your id is {data.id}</div>
)

function App(){
    const data ={
        name : "Sara",
        id : "200322"
    }

    return(
        <div>
            <Welcome name="Edite" id="9774"/>

            {/* data를 props로 전달, Welcome2 컴포넌트 작성 */}
            <Welcome2 data={data}/>
        </div>
    )
}

/*
    Hello~ Edite, your id is 9774
    Hello~ Sara, your id is 200322
*/
export default App;
```

- **예제5**
    - Component   → 속성을 직접 입력, 변수를 전달
    - Component2 → 객체 타입 전달, 객체를 직접 입력하여 전달
    - Component3 → 속성을 직접 입력, 객체의 요소를 선택하여 전달
    - Component4 → 객체로 정수를 전달하여 연산

```jsx
const Component = ({title}) => (
    <h1>{title}</h1>
)

const Component2 = ({param}) => (
    <li>
        {param.id} / {param.name}
    </li>
)

const Component3 = ({id, name})=>(
    <li>
        {id} / {name}
    </li>
)

function Component4({param}){
    return <div>{param.var1 + param.var2} </div>
}

function App(){
    const title = "React"
    const param = {
        id : 123,
        name : '이순신'
    }

    return(
        <div>
            <Component title="Web"/>
            <Component title={title}/>

            <Component2 param={param}/>
            <Component2 param={{id:234}}/>

            <Component3 id="9773" name="신사임당"/>
            <Component3 id={param.id} name={param.name}/>
            
            <Component4 param={{var1:5, var2:6}}/>
        </div>
    )
}

/*
    Web
    React
    123 / 이순신
    234 /
    9773 / 신사임당
    123 / 이순신
    11
*/
export default App;
```
