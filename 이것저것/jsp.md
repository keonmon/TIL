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
