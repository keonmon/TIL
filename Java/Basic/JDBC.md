Java- Basic - JDBC
- DB와 Java를 연결하는 기술인 JDBC에 대해 복습하고 기록한다.
---

# 1. JDBC

## 1.1. 개요

- JDBC(Java DataBase Connectivity)
- 다양한 종류의 RDB 작업할 때 사용되는 표준 API

- JDBC 연동과정
    
    ![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31f835cb-1a60-4ec9-9468-94fcfc404e7f%2FUntitled.png?table=block&id=918953f8-a03e-439f-8dd3-9688a02a899e&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1490&userId=&cache=v2)
    

## 1.2. jdbc 드라이버 로딩

- java.lang.Class의 forName() 메서드 사용
- forName()메서드의 인자값으로 Driver를 상속하는 클래스 이름을 지정
- 사용 예
    - `Class.forName("oracle.jdbc.driver.OracleDriver")`

## 1.3. DBMS 서버 접속

- java.sql.DriverManager의 getConnection() 메서드 사용
    - `static Connection GetConnection(String url, String user, String password)`
- String url : 접속할 서버의 URL 지정
    - jdbc:oracle:thin:@lacalhost:1521:xe
- String user : 로그인 할 계정
- String password : 로그인 비밀번호
- 사용 예
    
    ```java
    Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","USER","PASSWORD");
    ```
    

## 1.4. `Connection`, `Statement`, `ResultSet`

### 1.4.1. Connection 객체

- 위 `DriverMannager.getConnection()`에 담긴 정보를 가지고 연결을 시켜준다.

```java
Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","USER","PASSWORD");
```

### 1.4.2. Statement 객체

- 위에서 db정보를 품은 Connection 객체를 활용해 Statement 객체를 초기화 한뒤 사용해야한다.
- 생성된 Statement 객체는 sql문을 처리할 수 있다.
    
    ```java
    Statement stmt = con.createStatement();
    
    ...
    
    int = stmt.execute(sql) // true -> result / false -> 업데이트 또는 결과가 없는 경우
    
    rs = stmt.executeQuery(sql) // 쿼리 결과를 반환 (select)
    ```
    

### 1.4.3. Resultset 객체

- 쿼리 결과값을 가져오는 객체
- boolean next()
    - 다음 레코드의 유무를 판단. true인 경우 다음 레코드로 이동.
- Type value = getxxxx(column명/index)
    - 현재 레코드의 컬럼값을 반환함

```java
ResultSet rs = stmt.executeQuery("select * from student");
while(rs.next()){
	String name = rs.getString("name");
	int id = rs.getInt("id");
	String dept = rs.getString("dept");
}
```
