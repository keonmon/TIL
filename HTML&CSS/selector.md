# CSS3 - Selector 선택자
- CSS의 선택자에 대해 복습하고 정리가 필요한 내용을 기록한다.

---

## 1.1. 선택자(Selector)

- 스타일을 적용할 html element
- Tag, class명, id명을 이용하여 선택자를 작성
- 쉼표( , )를 이용하여 같은 스타일을 여러 선택자에게 적용할 수 있다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71312910-c89e-4f89-a336-4e98a35e083b%2FUntitled.png?table=block&id=22285f9e-13ad-43ca-bb9d-922ef4a83236&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1600&userId=&cache=v2)

- **선택자의 종류**

| 기본 선택자 | 타입(요소, tag), id, class 이름에 기반하여 요소를 선택  |
| --- | --- |
| 결합 선택자 | 선택자들의 특정 관계에 기반하여 선택 |
| 가상클래스 선택자 | 어떤 상황에 기반하여 선택 |
| 가상요소 선택자 | 요소의 일부분만 선택 |
| 속성 선택자 | 속성이나 속성값에 기반하여 선택 |

### 1.1.1. 기본 (타입) 선택자

- html 요소 이름을 사용
- 선택자를 콤마로 구분하여 나열한다.
- 다중 속성은 세미콜론으로 구분
- 전체 선택자( * )는 **페이지의 모든 요소를 선택**한다.

### 1.1.2. 아이디 선택자

- 특정한 요소를 선택

```html
#target{color:red;}
...

<p id="target"> Hello World!</p>
```

### 1.1.3. 클래스 선택자

- 클래스가 부여된 요소를 선택
- 여러 태그에 특정 스타일을 공통으로 적용하고자 할 때 사용

```html
.target{color:red;}

<p class="target"> Hello World!</p>
```

### 1.1.4. 아이디&클래스 선택자 예제

```css
<style>
    p{
        text-align: center;   
        color: red;
    }

    #para1{
        color: blue;
    }

    .center{
        text-align: center;
        color: red;
    }

    p.center{
        color:rgb(127, 101, 22);
    }

    .large{
        font-size: 25px;
    }
</style>
```

```html
<body>
    <p>가나다라마바사</p>
    <p id="para1">나도!</p>
    <h1 class="center">빨간색 그리고 가운데 정렬을 한 제목</h1>
    <p class="center">빨간색 그리고 가운데 정렬된 문단</p>
    <p class="center large">빨간색 그리고 중앙정렬된 문단, 그리고 크게</p>

</body>
</html>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6aabfbf9-160d-4c76-b815-51d6f6aa2f37%2FUntitled.png?table=block&id=42973652-07e4-43cf-af7c-5c6ce8e3317f&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1110&userId=&cache=v2)

### 1.1.5.  속성 선택자

- html 태그의 특정 속성(attribute)에 대해 값이 일치하는 태그에만 스타일을 적용하는 선택자

| [attribute="value"] | 특정 attribute와 value로 되어있는 요소를 선택 (완전히 일치하는 요소) |
| --- | --- |
| [attribute*=”value”] | value를 포함하는 요소 |
| [attribute^=”value”] | value로 시작하는 요소 |
| [attribute$=”value”] | value로 끝나는 요소 |

```css
<style>
    a{
        color: red;
    }

    /* href에 example 문자열을 포함하는 객체를 찾아 스타일을 변경한다 */
    a[href*="example"]{
        background-color: silver;
    }
    
    /* href에 InSensitive 문자열을 포함하는 객체를 찾아 스타일을 변경한다 */
    a[href*="InSensitive" ]{
        color: cyan;
    }
    
    /* href에 #로 시작하는 객체를 찾아 스타일을 변경한다 */
    a[href^="#" ]{
        background-color: gold;
    }
    
    /* href에 .org로 끝나는 객체를 찾아 스타일을 변경한다 */
    a[href$=".org" ]{
        color: blue;
    }
</style>
```

```html
<body>
    <ul>
        <li><a href="#internal">Internal link</a></li>
        <li><a href="http://example.com">Example link</a></li>
        <li><a href="#InSensitive">Insensitive internal link</a></li>
        <li><a href="http://example.org">Example org link</a></li>
      </ul>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F675a9ecd-25f9-4d1e-b043-54debf2810af%2FUntitled.png?table=block&id=28dbf5dd-cf7a-482a-bee9-99fe77468b84&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=440&userId=&cache=v2)

### 1.1.6. 자손, 자식, 형제 결합자

| s1 s2 | s1 요소에 포함된 s2 요소를 선택한다 (후손 관계) |
| --- | --- |
| s1 > s2 | s1 요소의 직계 자식 요소인 s2를 선택한다 (자식 관계) |
| s1 + s2 | 인접한 형제 선택자 |
| s1 ~ s2 | 일반적인 형제 선택자 |

```css
<style>
    /* div에 포함된 모든 자손을 선택 (p1, p2, p3) */
    div p{
        background-color: yellow;
    }

    /* 직계 자손 선택자 (p1, p2) */
    div > p{
        background-color: violet;
    }

    /* 인접한 형제 선택자(p4) */
    div + p{
        background-color: aqua;
    }

    /* 일반적인 형제 선택자 (p4, p5) */
    div ~ p{
        background-color: beige;;
    }
</style>

```

```html
<body>
    <h2>Descendant Selector</h2>

    <p>The descendant selector matches all elements that are descendants of a specified element.</p>

    <div>
        <p>Paragraph 1 in the div.</p>
        <p>Paragraph 2 in the div.</p>

        <section>
            <p>Paragraph 3 in the div.</p>
        </section>

    </div>

    <p>Paragraph 4. Not in a div.</p>
    <p>Paragraph 5. Not in a div.</p>

</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabc40f8e-6809-4664-b839-5ef0324fb01a%2FUntitled.png?table=block&id=975ae9fc-e96d-4cca-b9b2-79d6fd10c4a3&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=800&userId=&cache=v2)

### 1.1.7. psuedo-class(가상 클래스, 의사) 선택자

| 유형 | 셀렉터 | 설명 |
| --- | --- | --- |
| 마우스 | :hover | 마우스가 올려질 때 스타일 적용 |
|  | :active | 마우스로 누르고 있는 상황에서 스타일 적용 |
| 폼요소 | :focus | 폼 요소가 키보드/마우스로 포커싱 상태에 스타일 적용 |
| 링크 | :link | 방문하지 않은 링크에 스타일 적용 |
|  | :visited | 방문한 링크에 스타일 적용 |
| 블록 | :first-letter | <p>,<div>등과 같은 블록형 태그의 첫 글자에 스타일 적용. 
인라인 태그에는 적용안됨. |
|  | :first-line | <p>,<div>등과 같은 블록형 태그의 첫 라인에 스타일 적용.  |
| 구조 | :nth-child(even) | 짝수 번째 모든 자식 태그에 스타일 적용 |
|  | :nth-child(1) | 첫 번째 자식 태그에 스타일 적용 |
- 선택자를 이용한 **부모 요소의 특정 자식 요소 선택**하기
    - **:last-child** → 부모 요소의 마지막 자식 요소
    - **:first-child** → 부모 요소의 첫 번째 자식 요소
    - **:nth-child** → 부모 요소의 특정 순서 자식 요소
    
- 예제1

```css
<style>
        /* 방문한 적 없는 링크에 스타일 적용*/
        a:link{
            color:red;
        }

        /* 방문해본 링크에 스타일 적용*/
        a:visited{
            color:green;
        }

        /* 마우스가 올려져 있는 상태에 스타일 적용*/
        a:hover{
            color:aqua;
        }

        /* 마우스로 누르고 있는 상태에 스타일 적용*/
        a:active{
            color:blue;
        }

        a.highlight:hover{
            color:teal;
            font-size: 22px;
        }

        div{
            background-color: beige;
            color: beige;
            padding:25px;
            text-align: center;
        }

        div:hover{
            color: teal;
        }

    </style>
```

```html
<body>
    <h2>Styling a link depending on state</h2>

    <p><b><a href="http://www.naver.com" target="_blank">This is a naver link</a></b></p>
    <p><a class="highlight" href="css_syntax.asp">CSS Syntax</a></p>
    
    <div>Mouse Over Me</div>

</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ded3f92-2408-4e3c-a1ef-ff939a113738%2FUntitled.png?table=block&id=aa7a3a1c-4083-4d31-8a23-bda2c3631b5c&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1140&userId=&cache=v2)

- 예제2

```css
<style>
    /* 방문한 적 없는 링크에 스타일 적용*/
    tr:first-child{
        color:red;
    }

    /* 짝수번 째 행의 스타일 변경 */
    tr:nth-child(even){
        background-color: lightgray;
    }

    /* 홀수번 째 행의 스타일 변경 */
    tr:nth-child(odd){
        background-color: beige;
    }

    /*  첫 열의 스타일 변경 */ 
    tr > td:first-child{
        color:blue;
        font-weight: bold;
    }
    
    /* 두번째 열의 스타일 변경 */
    tr > td:nth-child(2){
        text-align: right;
    }
</style>
```

```html
<body>
    <table>
        <caption>매출 현황</caption>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
        <tr>
            <td>March</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>April</td>
            <td>$200</td>
        </tr>
    </table>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70c65005-e2bf-49a8-abf8-60c9bd43b3bb%2FUntitled.png?table=block&id=bf7aee1f-b488-41b9-a79a-782f857b9b76&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=310&userId=&cache=v2)
