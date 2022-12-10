## Basic

## 1.프로젝트 생성
- file-new-project
- 이름과 경로 설정
- TypeDefinition : 프로젝트의 기능을 담당하는 매우 중요한 file, 프로젝트 폴더내에 일반적으로 ...typedef.xml로 위치하게 된다.
- screen은 pc브라우저, 모바일 브라우저에서의 개발할 때 사용하게 된다.
- finish하면 프로젝트가 생성된다.

## 2. Project Explorer
- TypeDefinition : 프로젝트의 기능을 담당
- GlobalVariables : 어느 화면, 어느 파일에서나 접근이 가능한 글로벌 변수가 위치하게 된다.
  - Dataset : 2차원 테이블 형태로 데이터를 갖고있는 객체
  - Variable : 변수
  - Image : 이미지
- ADL(Application Definition Language) : .xadl 파일
  - MainFrame : 화면의 모양을 구성하는 것
  - childFrame
  - Themes : 테마
- Base : 프로젝트를 생성했을 때 기본적으로 생성되는 서비스 그룹


## 3. Services 생성하기
1. TypeDefinition 더블클릭
2. Services 탭 선택
3. Add 버튼 선택
  - Service ID : 서비스명
  - Service Type : form(화면을 생성)
  - Service Url : ./서비스명/
4. Ok로 완료하면 왼쪽 Project Explorer에 생성한 서비스가 생겨난다.
  - 그리고 프로젝트 경로에 들어가보면 생성한 서비스명의 디렉토리가 생성된 것을 확인할 수 있다.

## 4. form 생성하기
1. file-new-form / new아이콘-form / ctrl+N
2. name : frmHello 와 같이 카멜형식으로 생성하는 것이 일반적. form의 네이밍은 앞에 frm으로 시작하는 것이 좋다.
3. Location : form을 생성할 서비스를 선택한다.
4. 화면 크기 설정
5. 반응형 웹을 위한 설정
6. 레이아웃 설정

## 5. 컴포넌트 생성
- 상단 컴포넌트바에서 원하는 컴포넌트를 선택하여 form의 Design탭에 배치한다.
- 컴포넌트를 선택하면 우측 Properties 탭에 각 속성들이 보여진다.
  - Action : 컴포넌트의 동작과 관련된 속성
  - Appearance : 컴포넌트가 표현되는 속성
  - Information : 컴포넌트의 css클래스, id 정보를 설정
  - Style : 컴포넌트의 스타일 속성
- Event Info탭 : 번개모양의 Event Info 탭을 클릭하면 컴포넌트에 이벤트를 설정할 수 있다.
  - 이벤트를 더블클릭하면 자동적으로 script에 이벤트 function을 만들어준다.
  - 자동적으로 작성된 스크립트를 살펴보면 `this.`로 시작되는 것을 볼 수 있는데 이것은 scope라고 한다. (넥사크로14부터는 반드시 스코프를 지정해야한다.)
  - `this.`는 현재의 화면(폼)을 의미한다.
