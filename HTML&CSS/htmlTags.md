# HTML&CSS - HTML5 Tags
- HTML5의 태그에 대해 복습하고 정리한다.

---
# 2. HTML5

## **2.1. HTML Elements**

- **basic HTML**
    - `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, `<body>`, `<h1> ~ <h6>`, `<p>`, `<b>`, `<br>`, `<hr>`, `<!— … —>`(주석)
- **Formatting**
    - `<b>`, `<del>`, `<em>`, `<mark>`, `<pre>`, `<small>`, `<strong>`, `<time>` 등
- **Form and Input**
    - `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>`, `<optgroup>`, `<label>`, `<fieldset>`, `<datalist>`, `<ouput>`
- **Frame**
    - `<iframe>`
- **Images**
    - `<img>`, `<canvas>`, `<figcaption>`, `<figure>`, `<picture>`, `<svg>`
- **Audio / Video**
    - `<audio>`, `<source>`, `<track>`, `<video>`
- **Link**
    - `<a>`, `<link>`, `<nav>`
- **Lists**
    - `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
- **Table**
    - `<table>`, `<caption>`, `<th>`, `<tr>`, `<td>`, `<thead>`, `<tbody>`, `<tfoot>`, `<col>`, `<colgroup>`
- **Style and Semantics**
    - `<style>`, `<div>`, `<span>`, `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<aside>` 등
- **Meta Info**
    - `<head>`, `<meta>`
- **Programming**
    - `<script>`

## 2.2. 활용

### 2.2.1. list

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>List</title>
</head>
<body>
    <h2>리스트 태그</h2>
    <h3>ordered list</h3>
    <ol>
        <li>coffee</li>
        <li>tea</li>
        <li>list</li>
    </ol>
    
    <h3>unordered list</h3>
    <ul>
        <li>coffee</li>
        <li>tea</li>
        <li>list</li>
    </ul>

    <h3>Description list</h3>
    <dl>
        <dt>coffee</dt>
        <dd>black hot drink</dd>
        <dt>tea</dt>
        <dd>white cold drink</dd>
    </dl>
</body>
</html>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2b75f29-c90a-43e9-ba80-a8dc971ce030%2FUntitled.png?table=block&id=69c0a45c-920a-4e3c-b776-5781a8d7131b&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=550&userId=&cache=v2)

### 2.2.2. iframe

```html

<!-- iframe.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>iframe example</title>
</head>
<body>
    <h2>outer frame</h2>
    <p>이곳은 outer frame입니다.</p>

    <!-- inner frame -->
    <iframe src="demo_iframe.html" width="300" height="200"></iframe>

</body>
</html>
<!-- / iframe.html -->

<!-- demo_iframe.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>This page is displayed in iframe</p>
</body>
</html>
<!-- / demo_iframe.html -->
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F01910b35-8c8d-49ff-8351-2550e7637fd6%2FUntitled.png?table=block&id=94c8ee5b-9e91-42d0-93df-8fc84ef5ef19&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=750&userId=&cache=v2)

### 2.2.3. table

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>Table example</title>
    <style>
        table, table *{
            border:1px solid blue
        }

    </style>
</head>
<body>
    
    <table>
        <thead>
            <th>company</th><th>contact</th><th>contry</th>
        </thead>
        <tbody>
            <tr>
                <td>삼성</td><td>123</td><td>korea</td>
            </tr>
            <tr>
                <td>현대</td><td>234</td><td>korea</td>
            </tr>
        </tbody>

</body>
</html>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F34d5f95a-26c8-47a7-a18f-557e902634ae%2FUntitled.png?table=block&id=00183f37-3cb6-4d1a-856f-45d29c033dd6&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=520&userId=&cache=v2)

### 2.2.4. video & audio

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">

    <title>audio example</title>
</head>
<body>
    <!-- 크롬에서는 audio autoplay를 정책상 막아놓음 -->
    <audio controls muted="muted" autoplay >
        <source src="/sample/효과음-등장소리.mp3" type="audio/mp3">
        브라우저가 지원하지 않거나, 오디오가 존재하지 않습니다.
    </audio>
<hr>
    <video controls muted="muted" autoplay loop width="300">
        <source src="/sample/2020.01_프롬비_우주펭귄_루프영상 1.mp4">
    </video>
</body>
</html>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F02a11e0d-ab9c-4943-b2ac-6446e7387a4b%2FUntitled.png?table=block&id=2baade82-560b-4abd-97c5-5d7db58f8741&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=530&userId=&cache=v2)

### 2.2.5. semantics

- web page의 서로 다른 부분을 정의할 수 있는 요소
- 기존방식 : `<div id=”nav”>`, `<div class=”header”>`, `<div id=”footer>`

- **<section>** : 문서의 section을 정의
- **<article>** :  독립적인 컨텐츠를 기술
- **<header>** : 소개내용이나 네비게이션 링크를 표시
- **<footer>** : 문서의 섹션의 footer를 정의
- **<nav>** : navigation link의 집합을 정의
- **<aside>** : 본문 내용 외로 배치된 일부 컨텐츠를 정의

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F61e324fc-8d5e-4cc4-b980-bdc013de03e3%2FUntitled.png?table=block&id=58a09eb5-9b8e-46e7-a004-930aec904f69&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=460&userId=&cache=v2)

## 2.3. HTML Form

- 사용자의 입력을 받기 위해 사용

### 2.3.1. Form 요소

### 2.3.2. Form 개인정보 입력 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <form action="/register">
        <fieldset>
            <legend>개인정보</legend>
            <label for="name">name:</label> 
            <input type="text" id="name" name="name" placeholder="여백없이 입력" required><br><br>
            <label for="pass">password:</label> 
            <input type="password" id="pass" name="pass" required><br><br>
            <label for="tel">연락처</label> 
            <input type="tel" id="tel" name="tel"><br><br>

            <label for="email">Email:</label> 
            <input type="email" id="email" name="email"><br><br>
            <label for="birthday">birthday</label> 
            <input type="date" id="birthday" name="birthday"><br><br>
            <input type="submit" value="submit">

        </fieldset>
    </form>
</body>
</html>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1812c9b8-71fa-4fd4-b9cf-3c8b0c27f701%2FUntitled.png?table=block&id=df3fa99f-7d6b-4d25-8444-422f46c3b1e5&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=750&userId=&cache=v2)

### 2.3.3. select 입력 예제

```html
<body>
    <form action="#" method="get">
        <select name="vehicle">
            <option>자동차</option>
            <option>오토바이</option>
            <option selected>자전거</option>
        </select>
        <hr>

        <!-- 다중선택 -->
        <select size="6" name="class" multiple>
            <option value="archi">건축공학과</option>
            <option value="mechanic">기계공학과</option>
            <option value="indust">산업공학과</option>
            <option value="elec">전자과</option>
            <option value="computer">컴퓨터공학과</option>
            <option value="chemical">화학공학과</option>
        </select>
        <input type="submit" value="submit">
    </form>
</body>
```

- 전송 url :
    - localhost:3000/select.html?**vehicle=오토바이&class=mechanic&class=indust&class=elec#**

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1ce7dcff-b254-4085-8cf2-d8a556b0c278%2FUntitled.png?table=block&id=5a08431d-3175-4280-8ca6-f245e5ae4f58&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=430&userId=&cache=v2)

### 2.3.3. radio & checkbox 입력 예제

```html
<body>
    <form action="action_page" method="get">
        <fieldset>
            <legend>신청 과목</legend>
            <p>신청할 과목을 선택하세요</p>
            <!-- <label for="speaking"></label> -->
            <label><input type="radio" name="subject" value="speaking">회화</label>
            <label><input type="radio" name="subject" value="grammer">문법</label>
            <label><input type="radio" name="subject" value="writing">작문</label>
        </fieldset>
        <br>
        
        <fieldset>
            <legend>메일링</legend>
            <p>뉴스 주제를 선택해주세요</p>
            <label><input type="checkbox" name="mailing1" value="news">해외단신</label>
            <label><input type="checkbox" name="mailing2" value="dialog">5분회화</label>
            <label><input type="checkbox" name="mailing3" value="pops">모닝팝스</label>
        </fieldset>

        <input type="submit" value="전송">
        <input type="reset" value="초기화">
    </form>
</body>
```

- 전송 url :
    - localhost:3000/action_page?**subject=writing&mailing1=news&mailing2=dialog**

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8aa2fbad-6faa-4353-8a13-0e99aeffce68%2FUntitled.png?table=block&id=b38993a7-a613-450b-91b1-f85f9546a315&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1000&userId=&cache=v2)

### 2.3.4. number & color & Email 입력 예제

```html
<body>
    <form>
        Quantity<br>
        <input type="number" name="quantity" min="0" max="100" step="10" value="30"><br>
        Color<br>
        <input type="color" name="favcolor" value="#"><br>
        Email<br>
        <input type="email" name="email"><br>
        Range<br>
        <input type="range" name="points" min="0" max="10"><br>
        Date<br>
        <input type="date" name="birthday"><br>
        <input type="submit" value="전송">
    </form>
</body>
```

- 전송 url :
    - localhost:3000/html5form.html?**quantity=60&favcolor=%23662e2e&email=hong%40hong.hon&points=8&birthday=2022-02-23**
  
  ![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe955117c-af06-4a3f-ab27-082993b51b1f%2FUntitled.png?table=block&id=9b67745b-4a18-46c6-88df-aeecc4e5008b&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=420&userId=&cache=v2)
