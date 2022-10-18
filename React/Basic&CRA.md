# React - Basic & CRA(Create React App)
- 리액트의 기초와 CRA툴을 학습하고 정리한다.
---

## 1.1. 개요

- **Server Side Rendering**
    - 서버에서 렌더링을 작업하는 방식
    - 전통적인 웹 어플리케이션 렌더링 방식
    - 사용자가 웹 페이지에 접근할 때 서버에서 html, js 파일 등을 다운로드 하여 렌더링
- **Client Side Rendering**
    - HTML 및 Static 파일 다운로드
    - 필요한 데이터가 있으면 서버에서 데이터를 받아 렌더링을 수행
    - 변경된 부분만 렌더링
    - 컴포넌트 단위로 나누어 관리함으로써 코드의 재사용성을 높인다.
    - **react는 여기에 해당됨**
- **웹 프론트 프레임워크**
    - 리액트는 자바스크립트 라이브러리
    - 페이스북에서 개발하여, View단을 컨트롤 하는 라이브러리
    - 웹앱, 네이티브 모바일앱, 테스크톱앱 등 여러 플랫폼을 개발 방법을 제공
- **컴포넌트 기반 아키텍처**
    - 복잡한 문제를 작게 나누어 해결하기 위한 방법
    - 컴포넌트 단위로  View를 모듈화하여 재사용 가능한 ui 생성
    - 캡슐화를 통해 테스트 가용성, 신뢰성, 확장성, 결합성, 재사용성을 높임
- **Separation of Concerns (SoC)**
    - SoC는 컴퓨터 프로그램을 별개의 섹션으로 분리하여 각 섹션이 별도의 문제를 처리하도록 하는 설계 원칙
    - 기존의 웹 개발 방식은 관심사의 분리보다는 마크업, 디자인, 로직을 분리하는 기술의 분리를 했는데,
        
        ![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb8e191f8-b31c-4537-8a0f-5e2ebd151ec7%2FUntitled.png?table=block&id=cde26b2c-eb28-4da7-8a74-ee9d361a2a20&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=480&userId=&cache=v2)
        
    - 리액트는 **컴포넌트 형태**로 **관심사를 분리**했다.
        
        ![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5b97c12b-27d8-4e82-86b3-20bdea57e683%2FUntitled.png?table=block&id=a68609a1-6d26-436c-a8d5-605470736076&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=590&userId=&cache=v2)
        

## 1.2. **Create React App**

- React를 배우거나 새로운 single-page app을 만드는 user에게 권장하는 Toolchain
- React는 JAX(Javascript XML)언어를 사용하여 앱을 만들고, create-react-app이 javascript로 변환

### 1.2.1. 설치

- npm을 설치해야함.
    - cmd에서 `npm -v` 를 입력하면 설치했는지 확인 가능
    - [https://nodejs.org/ko/](https://nodejs.org/ko/) → 다운로드하여 **설치**
- Create React App 설치
- `npm install -g create-react-app`
- CRA 버전 확인 : `create-react-app -V`
- Project 생성
    - cmd에서 해당 디렉터리로 이동
    - `create-react-app .` 입력
- Terminal 생성
- Project 실행
    - `npm start run`

