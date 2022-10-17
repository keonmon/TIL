# JavaScript - 동적 바인딩(DinamicVinding)
- JavaScript의 동적 바인딩에 대해 학습하고 정리한다.
---
# 1. 데이터 동적 바인딩 (Data DinamicVinding)

## 1.1. id를 활용한 동적 바인딩

- 태그의 id로, `getElementById` 함수를 사용해 동적으로 바인딩이 가능하다.

```jsx
<div id="app">
    <span id="title"></span>    /   <span id="rate"></span>
</div>

<script>
    document.getElementById("title").innerHTML='레미제라블';
    document.getElementById("rate").innerHTML=7;

    /*
        레미제라블 / 7
    */
</script>
```

```jsx
<div id="root"></div>
 <script>
	    function app(){
	        const data = {
	            "title" : "영화블로그",
	            "images" : ["movie1.jpg","movie2.jpg","movie3.jpg"]
	        }
	        return `
	            <h1>${data.title}</h1>
	            <img src=${data.images[0]} width=50 > <br>
	            <img src=${data.images[1]} width=50 > <br>
	            <img src=${data.images[2]} width=50 > <br>
	            `;
	    }
	    document.getElementById('root').innerHTML=app();
	</script>
```

- 이미지 링크가 없는 점은 감안하3

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F514b7ca0-855d-4d5e-9d99-4d3e98f3ab18%2FUntitled.png?table=block&id=dcbbdfdf-6937-43d0-9e9c-bf011c722460&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=390&userId=&cache=v2)

## 1.2. tag명을 활용한 동적 바인딩

```jsx
<h3>내가 좋아하는 과일
    <button onclick="change()">누르세요</button>
</h3>
<hr>
저는 빨간 <span>사과</span>를 좋아해서 
아침마다 한 개씩 먹고 있어요. 운동을 할 때에는 
<span>바나나</span>도 먹어요. 탄수화물 섭취가 빨라
힘이 납니다. 또한 달콤한 향기를 품은 <span>체리</span>와
여름 냄새 물씬 나는 <span>자두</span>를 좋아합니다.
</h3>

<script>
    function change(){
        const spanArray = document.getElementsByTagName("span")

        for(let span of spanArray){
            span.style.color = "orange";
            span.style.fontSize = "20px";
        }
    }
</script>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd339a370-081e-40d0-9298-dabae1ecd32d%2FUntitled.png?table=block&id=cbe02cfc-bbdd-4ba7-9bf0-33bb7cab63ad&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1000&userId=&cache=v2)

## 1.3. 선택자를 활용 동적 바인딩

- 선택자로 요소를 선택하는 `querySelector` 를 활용한다.
    - `getElementById` 는 태그의 id만 활용하지만,
    - `querySelector`는 **선택자를 활용**한다.

```jsx
<h3 id="header-1">제목</h3>
<p class="example">This is test class</p>

<div>
    <h3>H3 element</h3>
    <p>I am a p element, my 123123123</p>
</div>

<div>
    <h3>H3 element</h3>
    <p>I am a p element, my 123123123</p>
</div>
<button onclick="myFunction()">click</button>
<script>
    function myFunction(){
        // 모든 div내 p태그를 배열로 가져옴
        let x = document.querySelectorAll("div > p");
        for(let item of x){
            item.style.font = "italic bold 20px arial, serif"
            item.style.color = "orange"
        }
    }
    
    window.onload = function(){
        document.querySelector("#header-1").innerHTML="새로운 제목";
        document.querySelector('p.example').style.backgroundColor="yellow";
    }
</script>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5f0e2c4b-28a6-4953-a519-7ec0b7f5b1a5%2FUntitled.png?table=block&id=79e2c8f7-02bd-4611-a14f-2bbd9c37b5e4&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=670&userId=&cache=v2)

## 1.4. 이벤트

- 마우스 클릭, 키보드 입력, 이미지나 html 문서의 로딩, 타이머의 타임아웃 등 사용자의 입력행위나 문서나 브라우저의 상태 변화를 자바스크립트 코드에게 알리는 통지 ( notification )
- 이벤트 리스너
    - 발생한 이벤트에 대처하기 위해 작성된 자바스크립트 코드

- html **태그 내에 작성**
    - `onmouseover` / `onmouseout`

```jsx
<p onmouseover="this.style.backgroundColor='orchid'"
onmouseout="this.style.backgroundColor='white'">
	마우스 올리면 orchid 색으로 변경
</p>
```

- `onclick`

```jsx
<button onclick="change(this, '30px', 'red')">버튼1</button>
<button onclick="change(this, '30px', 'blue')">버튼2</button>
<div onclick="change(this, '25px', 'orange')">
    여기를 클릭하면 크기와 색 변경
</div>
<script>
    function change(obj, size, color){
        obj.style.color = color;
        obj.style.fontSize = size;
    }
</script>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F935ba444-2f34-49b9-8c9c-29786b43d942%2FUntitled.png?table=block&id=41ef41ad-1031-4333-8662-8d352eaab5a2&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=790&userId=&cache=v2)

- `onsubmit`

```jsx
<form action="/action" onsubmit="alert('과연 submit이 잘 되었을까?')">
  Enter name : <input type="text" name="fname">
  <input type="submit" value="전송">
</form>
```

- dom 객체 `프로퍼티`에 작성

```jsx
function over() { // onmouseover 리스너로 사용할 함수
		...
}
var p = document.getElementById("p");
p.onmouseover = over; // onmouseover 리스너로 over() 함수 등록
```

```jsx
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        window.onload = function () {
            let id_p = document.getElementById("id_p")

            id_p.onmouseover = function(){
                id_p.style.backgroundColor = 'orchid';
                id_p.innerHTML = "onmouseover";
            }

            id_p.onmouseout = function(){
                id_p.style.backgroundColor = 'white';
                id_p.innerHTML = "onmouseout";
            }
        }
    </script>
</head>
<body>
    <p id="id_p">mouse on me</p>
</body>
```

![Honeycam 2022-10-17 15-12-01.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/105c096b-7560-4e22-975e-9eb153504b62/Honeycam_2022-10-17_15-12-01.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221017T140947Z&X-Amz-Expires=86400&X-Amz-Signature=1f2f1e2244f2e28378e2a905f43c776618d95cd3a0045b3055c8531b7f5ff0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

- dom 객체의 `addEventListener()` 메서드
    - 프로퍼티와 달리 `onmouseover`가 아니라, `mouseover`와 같이 앞에 **on이 빠진다.**

```jsx
// onmouseover 리스너로 over() 등록
p.addEventListener("mouseover", over); 
```

```jsx
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        window.onload = function () {
            let id_p = document.getElementById("id_p")

						// id_p.onmouseover = function(){
            //     id_p.style.backgroundColor = 'orchid';
            //     id_p.innerHTML = "onmouseover";
            // }

            // id_p.onmouseout = function(){
            //     id_p.style.backgroundColor = 'white';
            //     id_p.innerHTML = "onmouseout";
            // }

            id_p.addEventListener("mouseover", function(){
                id_p.style.backgroundColor = 'orchid';
                id_p.innerHTML = "mouseover";
            });
            id_p.addEventListener("mouseout", function(){
                id_p.style.backgroundColor = 'white';
                id_p.innerHTML = "mouseout";
            })
        }
    </script>
</head>
<body>
    <p id="id_p">mouse on me</p>
</body>
```

![Honeycam 2022-10-17 15-18-05.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a042e2f7-3a83-476a-8496-15a51a702d68/Honeycam_2022-10-17_15-18-05.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221017T140947Z&X-Amz-Expires=86400&X-Amz-Signature=14cb898cbcb57c8db398f90bd084a6330df25a192f62a3508607b58a6a112802&X-Amz-SignedHeaders=host&x-id=GetObject)

## 1.5. form valid

### 1.5.1. `required pattern` 프로퍼티 활용

- `required pattern` 프로퍼티를 활용한 valid를 확인한다.

```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        /* valid조건이 만족하지 않으면 적용되는 스타일 */
        input:invalid{
            border:1px solid red;
        }

        /* valid조건이 만족하면 적용되는 스타일 */
        input:valid{
            border:1px solid blue;
        }
        
        /* required 속성의 패턴과 일치하면 적용되는 스타일 */
        input:required{
            background-image: linear-gradient(to right, pink,lightgreen);
        }
    </style>
</head>
<body>
    <form action="/action_url">
        <label for="choose">Would you prefer a banana or cherry?</label><br>
        <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry">
        <button>submit</button>
    </form>
</body>
```

![Honeycam 2022-10-17 15-32-20.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fcc26438-f867-4496-992d-87e5667123c0/Honeycam_2022-10-17_15-32-20.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221017T140948Z&X-Amz-Expires=86400&X-Amz-Signature=63f8a36712c3378b5f62fb39afc6a3b2fefe984b80e5f192eaf0c15d997a00d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### 1.5.2. javascript 함수를 활용

```jsx
<form action="/action_url" name="myForm" onsubmit="return validateForm()">
    <input id="fname" name="fname">
    <button>submit</button>
</form>

<script>
    function validateForm(){
        const x = document.getElementById("fname").value
        if(x == ''){
            alert('이름이 반드시 입력되어야 해요~');
            document.getElementById('fname').focus();
            return false;   // 다음 페이지로 넘어가지 않도록
        }
    }
</script>
```

## 1.6. 팝업창 패턴

- `window.open(url,name,specs,replace)` 
bom 내장함수 사용
- 위 메서드로 생성한 객체를 변수에 담은 뒤, document 내용을 작성
    - win

```jsx
<head>
    <meta charset="UTF-8">
    <title>popup</title>
    <script>
        let win = null;
        
        function showHTML(){
						// win객체가 비어있거나, 닫았다면 다시 open 가능하도록
            if(win == null || win.closed){
                // window.open(url,name,specs,replace)
                win = window.open("","outWin","width=300,height=200");
            }

            let textArea = document.getElementById("srcText")
            win.document.open();
            win.document.write(textArea.value);
            win.document.close();
        }
    </script>
</head>
<body>
    <h3>HTML 문서 작성기 만들기</h3>
    <hr>
    <p>아래에 html 코드를 작성해봐요</p>
    <textarea id="srcText" row='10' cols="50"></textarea>
    <br><br>
    <button onclick="showHTML()">html 문서 출력</button>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6854beb5-122c-4557-a3e4-267d7415d699%2FUntitled.png?table=block&id=82ad3d77-fafe-4bd0-b935-a865b6bb44f1&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=820&userId=&cache=v2)
