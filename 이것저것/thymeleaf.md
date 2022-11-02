## 이것저것 - thymeleaf 타임리프
- 템플릿 EL 중 하나인 타임리프에 대해 학습하고, 정리가 필요한 내용만 기록한다.

---


# 1. Thymeleaf

- 자바 기반의 xml/xhtml/html5 템플릿 엔진
- **mvc패턴에 적합**하게 설계된 **view 템플릿**이다.
- **Spring Framework와의 조합**이 뛰어나다.
- 지원이 끊긴 jsp의 대안으로 오픈소스로 제공된다.

- 컨트롤러가 전달하는 데이터를 이용하여 동적으로 html을 생성
- **html태그를 기반**으로 하여 th:속성을 이용
- HTML에서 namespace 정의
    
    ```html
    <html lang="en" xmlns:th="http://www.thymeleaf.org">
    ```
    
- 서버에서 html을 동적으로 렌더링한다.
- 순수한 html을 최대한 유지하려는 특징이 있다.

## 1.1. 기본 문법

### 1.1.1. 간단한 표현

- 변수 표현식 : `${…}`
- 선택 변수 표현식 : `*{…}`
     
    ```html
    <table border="1">
        <th:block th:object="${book}">
            <tr>
                <th>저자</th> <td th:text="*{title}"></td>
            </tr>
            <tr>
                <th>분류</th> <td th:text="*{category}"></td>
            </tr>
            <tr>
                <th>가격</th> <td th:text="|₩*{#numbers.formatInteger(price,3,'COMMA')}|"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <img th:src="*{image}" height="250px"/>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <a th:href="|https://product.kyobobook.co.kr/detail/*{code}|" target="_blank">
                        [[${book.title}]]
                    </a>
                </td>
            </tr>
        </th:block>
    </table>
    ```
    
- 메세지 표현식 : `#{…}`
- 링크 URL 표현식 : `@{…}`
    
    ```html
    <a th:href="@{/read(id=id,action=hello)}">go4~~~</a> @{}태그 활용
    ```
    
- 조각 표현식 : `~{…}`

### 1.1.2. 문자 연산

- 문자 합치기 : `+`
    
    ```html
    img="movie.jpg"
    <img th:src="'img/'+${img}" width="150"/>
    ```
    
- 리터럴 대체 : `|` The name is ${name} `|`
    - 자바스크립트에서 백틱‘ 과 같은 역할
    
    ```html
    img2_1="movie"
    img2_2="jpg"
    <img th:src="|img/${img2_1}.${img2_2}|" width="150"/>
    ```
    

### 1.1.3. 불린 연산

- Binary operators : `and`, `or`
- Boolean negation (unary operator) : `!`, `not`

### 1.1.4. 조건 연산

- **`if`**, **`unless`** 문
    
    ```html
    [[${booleanT}]] = true
    [[${booleanF}]] = false
    
    <!-- if문 -->
    <th:block if="${booleanT}">
        <h3>true가 적용됨</h3>
    </th:block>
    
      <!-- if - unless 비교 -->
      <p>
          if     : true 조건식 (조건식이 true일 때 연산)<br>
          unless : false 조건식(조건식이 false일 때 연산)
      </p>
    
    <th:block th:unless="${booleanT}">
        <h3> unless true 조건 </h3>
    </th:block> 
    <!-- no display -->
    
    <th:block th:if="!${booleanT}">
      <h3> not true 조건 </h3>
    </th:block>
    <!-- no display -->
    
    <th:block th:unless="${booleanF}">
        <h3> unless false </h3>
    </th:block>
    <!-- display -->
    
    <th:block th:if="!${booleanF}">
        <h3> notFalse 조건 </h3>
    </th:block>
    <!-- display -->
    
    <th:block th:if="!${booleanF} == false">
        <h3> notFalse 조건 </h3>
    </th:block>
    <!-- no display -->
    
    <h2 th:text=" ${booleanT} == true ? 'Hello' : 'Something else' "></h2>
    <!-- Hello -->
    ```
    

- **`switch` - `case`문**
    
    ```java
    @Data @NoArgsConstructor @AllArgsConstructor
    public class User {
    		private String userName;
    		private String email;
    		private String role;
    }
    
    ---
    
    User user= new User("<span style='color:blue'>RM</span>"
                        ,"btsrm@aaa.net"
                        ,"admin"
    );
    
    model.addAttribute("user", user);
    ```
    
    ```html
    <p th:utext="${user.userName}"></p> <!-- RM -->
    
    <hr>
    <div th:switch="${user.role}">
        <p th:case="'admin'">user is administrator</p>
        <p th:case="'ADMIN'">user is administrator</p>
        <p th:case="'manager'">user is manager</p>
        <p th:case="'guest'">user is guest</p>
        <p th:case="'*'">user is something else</p>
    </div>
    <!-- user is administrator -->
    ```
    

### 1.1.5. 리터럴

- 텍스트 : ‘one Text’, ‘Another One!’, …
- 숫자 : 0, 34, 3, 2.0, 12.3 …
- 불린 : `true`, `false`
- 널 : `null`
- 리터럴 토큰 : one, sometext, main …

### 1.1.6. 산술 연산

- Binary operators : `+`, `-`,  `*`, `/`, `%`
- Minus sign(unary operator) : `-`

### 1.1.7. 비교와 동등

- 비교 : `>`, `<`, `≥`, `≤` (`gt`, `lt`, `ge`, `le`)
- 동등 연산 : `==`, `≠` (`eq`, `ne`)

### 1.1.8. th:block 태그

- 반복문을 돌릴 때 유용하게 사용되는 태그

```html
<th:block th:text="${name}"> </th:block>

<th:block th:utext="${html}"></th:block>
```

```html
<!-- th:block 사용 -->

<th:block th:each="user : ${userList}">
    <div>
        <span th:text="user.username}">username</span>
        <span th:text="user.age}">age</span>
    </div>
    <div>
        <span th:text="${user.username} + ' & ' + ${user.age}">username&age</span>
    </div>	
</th:block>

출처: https://maenco.tistory.com/entry/Thymeleaf-Block-tag-블록-태그?category=965894
```

### 1.1.9. 반복문

- `<th:block></th:block>` 태그를 활용해 반복문을 실행한다.
- `status`는 각종 메타정보를 갖고있다.
    - index, size 등
- `th:each="var,status : ${}"`

```java
@RequestMapping("/repeat")
public String repeat(Model model){
    String[] countries={"korea","Japan", "US", "China"};
    model.addAttribute("countries", countries);

    return "repeat";
}
```

```html
<th:block th:each="country : ${countries}">

    <h3>[[${country}]]</h3>

</th:block>
<!--
	korea
	Japan
	US
	China
-->

<h3>반복, index</h3>
<th:block th:each="country, status:${countries}">
    <p th:text="| ${status.index+1}/${status.size} - ${country} |"></p>
</th:block>
<!--
	1/4 - korea
	2/4 - Japan
	3/4 - US
	4/4 - China
-->

<h3>반복, even(짝수)</h3>
<th:block th:each="country, status:${countries}">
    <p th:text="${country}"
        th:class="${(status.index%2 == 0) ? 'red' : 'blue'}"></p>
</th:block>
<!--
	1/4 - korea (red)
	2/4 - Japan (blue)
	3/4 - US    (red)
	4/4 - China (blue)
-->

<h3>반복, first, last</h3>
<th:block th:each="country, status:${countries}">
    <p th:text="| ${status.index+1}/${status.size} - ${country} |"
       th:class="${status.first || status.last ? 'blue' : '' }"></p>
</th:block>
<!--
	1/4 - korea (blue)
	2/4 - Japan 
	3/4 - US    
	4/4 - China (blue)
-->
```

### 1.1.10. object, field

```html
<form th:object="${book}">
    <!-- th:field -->
    <input th:field="*{title}"/> <br>
    <input th:value="${book.title}"/><br>
    <input type="checkbox" th:checked="${age} > 5 ">  a > 5 <br>
</form>
```

### 1.1.11. `${#numbers.formatInteger()}`

- 정수 포맷을 변경하는 함수.
- 콤마를 표시해 단위를 표시할 수 있다.
    - `${#numbers.formatInteger(value,자릿수, 'COMMA')}`
    
    ```html
    <p th:text="|₩${#numbers.formatInteger(1000000, 3,'COMMA')}|"></p>
    // ₩1,000,000
    ```
    
# 2. 활용

## 2.1. 라디오버튼 활용 예제

- `onclick="return(false)"`하면 선택이 바뀌는 것을 막을 수 있다.
- `th:checked="${key.equals('value')}`는 값을 비교하여 true/false를 리턴한다.

```html
<form action="/uiForm2" method="get">

  title : <input type="text" name="title" th:value="${title}"><br>
  
  <h4>당신이 선택한 좋아하는 운동</h4>
  <!-- onclick="return(false)"하면 선택이 바뀌는 것을 막을 수 있다. -->
  <!-- th:checked="${key.equals('value')}는 값을 비교하여 true/false를 리턴한다. -->
  <input type="radio" onclick="return(false)" id="football" name="exercise" value="football"
      th:checked="${exercise.equals('football')}"/>축구
  <input type="radio" onclick="return(false)" id="basketball" name="exercise" value="basketball"
      th:checked="${exercise.equals('basketball')}"/>농구
  <input type="radio" onclick="return(false)" id="baseball" name="exercise" value="baseball"
      th:checked="${exercise.equals('baseball')}"/>야구
</form>
```

## 2.2. checkbox 활용 예제

- radio와 같이 `onclick="return(false)"`하면 선택이 바뀌는 것을 막을 수 있다.
- checkbox는 **radio와 달리 중복선택이 가능**하기 때문에 **List타입과 같은 타입**으로 값이 넘어온다.
    - `th:checked="${key.contains('value')}` 과 같이 요소에 해당 값이 있는지 확인한다.

```html
<h4>소유 이동수단</h4>
<input type="checkbox" onclick="return(false)" id="bike" name="vehicles" value="bike"
       th:checked="${vehicles.contains('bike')}">자전거
<input type="checkbox" onclick="return(false)" id="car" name="vehicles" value="car"
       th:checked="${vehicles.contains('car')}">자동차
<input type="checkbox" onclick="return(false)" id="boat" name="vehicles" value="boat"
       th:checked="${vehicles.contains('boat')}">보트
```

## 2.3. select 활용 예제

- select 태그에 `disabled` 하면 비활성화 할 수 있다.
    - option 태그에 하면 해당 옵션이 비활성화 된다.
- select의 option은 radio와 같이 단일값이기 때문에
    - `th:selected="${key.equals('value')}` 과 같이 요소에 해당 값이 있는지 확인한다.
    - 다른점은 `th:checked`가 아닌 `th:selected`라는 점

```html
<h4>선호하는 과일</h4>
<select name="fruits" disabled >
    <option value="apple" th:selected="${fruits.equals('apple')}">사과</option>
    <option value="pear" th:selected="${fruits.equals('pear')}">배</option>
    <option value="banana" th:selected="${fruits.equals('banana')}">바나나</option>
</select><br>
```

## 2.4. textarea 활용 예제

- textarea는 readonly 속성으로 값의 변경을 막을 수 있다.
- `th:text` 에 값을 넣으면 넘어온 값이 적용된다.

```html
<label for="review">리뷰 메모</label><br>
<textarea id="review" name="review" rows="4" cols="50" readonly th:text="${review}">
    review
</textarea>
```
