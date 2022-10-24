# 이것저것 - WebServer 웹서버
- 웹서버의 개념, 이론적인 내용을 학습하고 정리한다.

---

# 1. WebServer

## 1.1. 개요

1. 클라이언트로부터 서비스 용청을 받음 (request)
2. 서비스 요청에 따른 웹 application 실행
3. 서버 처리결과를 클라이언트에 응답(response)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd1779c47-f636-4b3d-84f8-42ae4b91ac77%2FUntitled.png?table=block&id=71b85ff1-1835-40e1-aeb3-4c5b87f57ddd&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1380&userId=&cache=v2)

## 1.2. was

- **Web Application Server**

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F58e9a2ca-4b84-45a6-bbf3-4852549ea3bd%2FUntitled.png?table=block&id=25279996-6177-44d9-abb8-0508e4ef5f28&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1390&userId=&cache=v2)

- **컨테이너 ( Container )**
    - 서블릿과 jsp와 같이 **동적 콘텐츠를 처리**하는 프로그램
    - **동적 콘텐츠 저장소**
    - **메모리 로딩**, **객체 생성 및 초기화** 등 **생명주기 관리**
    - **변환** 기능 수행
    - 컨테이너의 종류
        - jsp 컨테이너
        - 서블릿 컨테이너

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a30e16b-d7a0-460c-932d-00b91704d205%2FUntitled.png?table=block&id=14cc2dc2-a1e1-4c48-9f9c-7d08b1a4f92e&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1390&userId=&cache=v2)

## 1.3. HTTP 프로토콜

- 웹브라우저 - 웹서버 간 통신 프로토콜 (1996)
- **HTML 포맷**을 사용한 텍스트/멀티미디어 자료 공유
- **TCP(:80port) 프로토콜을 사용**한 **응용계층**
- **무연결(Connecttionless) :**
    - 통신시 **연결을 유지하지 않고** 데이터를 주고받음
- **무상태(Stateless) :**
    - 요청마다 독립적인 트랜잭션으로 취급하여 이전 연결에서 했던 작업을 그대로 사용할 수 없다. (대규모 접속 허용)
    - Cookie나 Session을 활용해 이것(이전 상태를 유지하지 못하는 점)을 보완한다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69f3ef9c-1355-4492-b719-a74ddbcf92c4%2FUntitled.png?table=block&id=31ed1f04-d363-44b7-80c8-76331b8ea974&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1060&userId=&cache=v2)

### 1.3.1. HTTP Meothod(get / post)

- 웹 서버에 요청하는 방식
    - 웹서버와 클라이언트의 **data를 전송하기 위한 방법**
    - **get**과 **post**는 전달하는 방식에 차이가 있다.
- **GET**
    - **URL**을 통해 **데이터를 전송**
    - GET방식으로 전송할 수 있는 DATA의 크기는 한계가 있다.
    - 전송 URL이 노출된다.
        - http://xxx**/**service?**name1=value1&name2=value2**
        - GET /service?**name1=value1&name2=value2**
        - Host : xxx
- **POST**
    - 리소스를 생성/변경하기 위해 설계되었다.
    - **HTTP메시지의 body**에 전송해야 될 **데이터를 넣어 전송**
    - 대용량 데이터 전송

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7ab9adaa-8d94-4d34-becc-d651d053fe9e%2FUntitled.png?table=block&id=78b4fd31-5666-46b8-bc74-7befed225be5&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1390&userId=&cache=v2)

## 1.4. 웹 Application Access 방법

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F01eef8f0-5dc9-430d-85dd-0f3ef25b09e6%2FUntitled.png?table=block&id=8a13fa96-4b9b-4b10-abdc-0a8085535549&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1150&userId=&cache=v2)

### 1.4.1. 쿼리스트링 / pathVariable 방식

- **쿼리스트링** 방식
    - https://search.naver.com/search.naver?**where=nexearch&squery=iot**
    - `@RequestPram` 어노테이션을 사용하여 **쿼리스트링에서 값을 받아온다.**
    - **key=value 방식**으로 **여러 데이터를 받기에 적합**
- **pathVariable** 방식
    - https://www.jsp.com/**en/company/about/**
    - https://blog.naver.com/**nailstan/222905977305**
    - https://weather.naver.com/**today/14130116**
    - `@pathVariable` 어노테이션을 사용하여 **uri 경로에서  값을 추출**한다.
    - 가장 **RESTful한 방식**이지만, key=value와 같이 **여러 데이터를 받아오기에는 불리**함
