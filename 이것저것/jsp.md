# 이것저것 - JSP
- jsp에 대해 복습하고 내용을 정리하여 기록한다.

---

# 1. JSP

## 1.1. 장점

- 장점
    - write once, run anywhere properties
    - 역할 분리
    - 컴포넌트와 태그 라이브러리 재사용
    - 정적 콘텐츠 - 동적 콘텐츠의 분리

## 1.2. 동작원리

- 웹 애플리케이션
- 컴포넌트와 컨테이너
- 변환과 실행

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F57499845-9a9e-4dcb-a567-15bcff382fb6%2FUntitled.png?table=block&id=b2f15c7c-3cdc-4f0d-8994-334200cfd320&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1180&userId=&cache=v2)

## 1.3. JSP 작성

### 1.3.1. 스크립트 기반 태그

- **지시자**
1. **import**
    - `<%@  %>` 를 사용한다.
    
    ```java
    <%@ page language="java" contentType="text/html; charset=utf-8" %>
    
    <% Date d = new Date(); %>
    
    // Date 객체를 사용하려면 아래와 같이 import해야함.
    // ======================================
    
    <%@ page language="java" contentType="text/html; charset=utf-8" import="java.util.*" %>
    
    <% Date d = new Date(); %>
    <% d %> // Tue Oct 25 10:24:22 KST 2022
    ```
    
2. **스크립트릿**
    - `<%  %>`  를 사용한다.
    
    ```java
    <%
    	for(int i=2; i<10; i++, out.print("<br>"))
    		for(int j=1; j<10; j++)
    			out.print(i + "x" + j +"=" + (i * j) + "<br>");
    %>
    /*
    	2x1=2
    	2x2=4
    	2x3=6
    	2x4=8
    	...
    	9x8=72
    	9x9=81
    */
    
    // ==================
    
    <style>
    	.red{
    		color:red;
    	}
    </style>
    
    <%
    	for(int i=0; i<3; i++){
    		out.println("<h1 class='red'> test </h1>");
    	}
    
    %>
    <%
    /*
    	test
    
    	test
    	
    	test
    */
    %>
    ```
    
3. **표현식**
    - `<%=  %>`를 사용한다.
    - 표현식 `<%= value %>` 은 `<% out.print(value) %>` 와 같은거라 생각하면 쉽겠다.

```java
<%
	for(int i=0; i<3; i++){
		out.println("<h1 class='red'> test </h1>");
	}
%>

<%
/*
	test

	test
	
	test
*/
%>

// ==== 표현식으로 변환하면 =====

<% for(int i=0; i<3; i++){ %>

<%= "<h1 class='red'> test" + i + "</h1>" %>

<% } %>

<%
/*
	test0

	test1
	
	test2
*/
%>
```

1. **선언문**
    - 변수, 함수 **선언**이 가능하다.
    - `<%!  %>` 태그를 사용
    - 페이지가 반복적으로 호출될 때 영향을 받지 않는 `멤버변수, 함수이다`.

```java
<%! public int sum(int a, int b){
			return a + b;
}
%>

<%= sum(20,40) %> // 60

//========================

<%! int count = 1 ;%>

<% count++;%>
<h1><%= count %></h1>

```

![Honeycam 2022-10-25 11-22-17.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c60b74fa-dbed-4d1a-b198-a43f6a742237/Honeycam_2022-10-25_11-22-17.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221025T040259Z&X-Amz-Expires=86400&X-Amz-Signature=4f4b9962205aae8c0bb1110c0583a4152b065e4600bfe94f2bdc59b553505180&X-Amz-SignedHeaders=host&x-id=GetObject)

- count값을 문자열로 변환하고, 
문자열의 길이만큼 `cntStr.charAt(i)`를 반복한다.

```java
<%! int count=0; %>

<% 
	count++;
	String cntStr = Integer.toString(count);
	
	for(int i=0; i<cntStr.length(); i++){
%>
		<img src='img/<%=cntStr.charAt(i)%>.png' height=50 />
<% } %>

```

![Honeycam 2022-10-25 11-49-50.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2803a04-fe38-4909-b1a0-bed3cf48145c/Honeycam_2022-10-25_11-49-50.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221025T040259Z&X-Amz-Expires=86400&X-Amz-Signature=2a83d1269663dfa22b9fe579fe44047a51f94b758c6729e3542018209ae4e670&X-Amz-SignedHeaders=host&x-id=GetObject)

### 1.3.2. 배열 활용

- **예제1**

```java
<%! String[] fruits = {"사과", "귤"}; %>

<ol>
	<% for(String fruit : fruits){ %>
		<li><%=fruit%></li>
	<% } %>	
</ol>

/*
	1. 사과
	2. 귤
*/
```

- **예제2**
    - class 지정에 **삼항연산자**를 활용

```java
<head>
	<style>
		.red{
			color:red;
		}
	</style>
</head>
<body>
<%!
	int[] data = {10,30,90,45,34,75,45};
	// 평균 이하의 점수는 .red 스타일 적용
%>

<ul>
	<% 
		double avg = 0d;
		
		for(int score : data){ 
			avg += score;
		}
		avg /= data.length;
		out.println("평균 : "+ avg);
		
		for(int score : data){
		%>
			<li class=<%= (score<avg) ? "red":""%>>
 				<%=score%>
			</li>
	<% } %>	
</ul>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F396232ae-f847-4b0e-a68f-2911ccf5b2c5%2FUntitled.png?table=block&id=cd584878-6aa5-4726-8c72-2999be1b4c7d&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=220&userId=&cache=v2)

- **예제3**
    - class 값을 미리 변수에 넣어 지정함
    - 변수에서 값의 포함여부를 확인하는 `contains()` 함수 활용

```java
<head>
	<style>
		.highlight{
			background-color:yellow
		}
	</style>
</head>

<body>
<%! String[] tiles = {"안녕하세요","오늘의 요리는", "요리는 무엇을","다음에"}; %>

<table>
	<% 
		String keyword = "요리";
		// keyword로 제시된 목록을 화면에서 highlight 되도록
	
		for(int i = 0; i < tiles.length; i++){ 
			String css = "";
			if(tiles[i].contains(keyword)) css = "highlight"; %>

			<tr>
				<td><%=i+1+". " %></td>
				<td class=<%=css%>>
					<%=tiles[i] %>
				</td>
			</tr>

		<% } %>	
</table>
</body>

```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0cada04e-e2e1-4201-9902-87c1362b8801%2FUntitled.png?table=block&id=8a1de46c-da55-4c91-8d15-fe17650dd3c8&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=240&userId=&cache=v2)

- 예제4
    - `<a>`태그를 활용한 외부url에 요청값 추가

```java
<h3>날씨 정보</h3>

<%!
	String[] names = {"서울","부산","제주","인천","파주","수원","천안","강릉","백령도","여수"};
	// 테이블 안에 names에 있는 지역의 날씨에 대한 링크를 보여주는 화면을 작성	
	
	String url ="https://search.naver.com/search.naver?query=";
%>

<table>
	<% for(String name : names){ %>
			<tr>
				<td><a href='<%=url + name %>날씨' target="_blank"><%=name %> 날씨</a></td>
			<tr>
	<% } %>
</table>
```

![Honeycam 2022-10-25 15-45-15.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ba439bef-89bb-4040-8b4d-2960a91a8d62/Honeycam_2022-10-25_15-45-15.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221025T072341Z&X-Amz-Expires=86400&X-Amz-Signature=f1e78558a35e5b48892daff1dda36417134a55365d4be231491f7e7ed924845a&X-Amz-SignedHeaders=host&x-id=GetObject)

- 예제5

```java
<%!
	int[] kind = {1,2,2,3,3,1};	// titles과 일치하게 매핑
	String[] titles = {"된장찌개","짬뽕","탕수육","우동","초밥세트","김치찌개"};
	String[] strKind = {"_","한식","중식","일식"};
%>

<table border=1>
	
	<% for(int i=0; i<titles.length;i++){%>
		<tr>
			<td><%=i+1%>.</td>
			<td><%= strKind[kind[i]]%></td>
			<td><img src='img/kind<%=kind[i]%>.jpg' width=30 height=30></td>
			<td><%=titles[i] %></td>
		</tr>
	<%}%>

</table>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F46fec3b4-3be9-4bb1-9478-790fd575dc7a%2FUntitled.png?table=block&id=ba2300dd-83f0-4234-a2ff-ec342e9a970c&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=290&userId=&cache=v2)

### 1.3.3. html → jsp 예제

- html이 전달하는 파라미터를 jsp에서 `request.getParameter()`를 활용해 받아낸다. (관련 객체를 import할 필요 없음)
- GBB.html
    - `<form>`태그의 action 속성에서 이동할 jsp를 지정한다.

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>GBB</title>
	<style>
		img {
			width: 100px;
			height: 100px;
		}
	
		table {
			text-align: center;
		}
	</style>
</head>

<body>
	<form action="GBB.jsp" method="get">
		<h1>버튼을 선택하세요</h1>
		<table>
			<tr>
				<td><img alt="가위" src="img/gawi.jpg"></td>
				<td><img alt="바위" src="img/bawi.jpg"></td>
				<td><img alt="보" src="img/bo.jpg"></td>
			</tr>
			<tr class="buttons">
				<td>
					<button type="submit" name="me" value="0">가위</button>
				</td>
				<td>
					<button type="submit" name="me" value="1">바위</button>
				</td>
				<td>
					<button type="submit" name="me" value="2">보</button>
				</td>
			</tr>

		</table>
	</form>
</body>
</html>
```

- GBB.jsp

```java
<%!	
	//가위바위보 승부 메서드
	public int gbbGame(int meNum, int comNum ){
		int result = (meNum - comNum + 3) % 3; 
		return result; // 0: "비김", 1: "이김", 2: "짐"
	} 
%>
<%

	//문자열 변환용 배열 선언
	String[] gbbToStr = {"gawi","bawi","bo"};
	String[] resultToStr = {"draw", "win", "lose"};
	
	// 정수형 담을 변수 선언 ( 나, 컴, 결과 )
	int meNum = Integer.parseInt(request.getParameter("me"));
	int comNum = (int) (Math.random()*3);
	int result;
	
	// 승부
	result = gbbGame(meNum, comNum); // 0: "비김", 1: "이김", 2: "짐"
	System.out.println(gbbToStr[meNum] + "," + gbbToStr[comNum] + "," + resultToStr[result]);
	
	// 출력
	out.print("<style>img{width:50px;height:50px;}</style>");
	out.print("<h1>가위바위보 결과</h1>");
	out.print("my :<img src='img/" + gbbToStr[meNum] + ".jpg'> com : <img src='img/" + gbbToStr[comNum] + ".jpg'> result : <img src='img/" + resultToStr[result] + ".jpg'>");
	out.print(" <a href='GBB.html'>again</a>");
	out.print("<h3>"+ resultToStr[result] + "</h3>");
%>
```

![Honeycam 2022-10-25 15-50-05.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a125e339-3125-4419-a26a-f274074c9edb/Honeycam_2022-10-25_15-50-05.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221025T072341Z&X-Amz-Expires=86400&X-Amz-Signature=cd04d3f6644d9f34ce5ffefdf835709b9ff8fe14681195d6145986b10f489f89&X-Amz-SignedHeaders=host&x-id=GetObject)
