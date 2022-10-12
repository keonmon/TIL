# CSS3 - BoxModel 박스모델
- CSS의 박스모델에 대해 복습하고 정리가 필요한 내용을 기록한다.
---

## 1.2. 박스모델 유형 제어 `display`

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F34de3796-c1cd-4551-8d06-fc3ba3289fea%2FUntitled.png?table=block&id=6cc33ddb-69c6-486e-9672-d6b67f757fc0&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1840&userId=&cache=v2)

### 1.2.1. 블록 박스

- 대표적으로  `<div>`
- 항상 새 라인에서 시작
- 블록 박스 내에만 배치
- 옆에 다른 요소를 배치할 수 없다
- width / height로 크기 조절
- padding, border, margin 조절이 가능하다

### 1.2.2. 인라인 박스

- 대표적으로 `<span>`
- 새 라인에서 시작이 불가능
    - 한 라인에 있다
- 모든 박스 내에 배치가 가능하다.
- 옆에 다른 요소를 배치할 수 있다.
- width / height 크기조절 불가능
- margin-top, margin-bottom 조절 불가능

### 1.2.3. 인라인-블록 박스

- **인라인의 속성**
    - 새 라인에서 시작이 불가능하다
    - 라인 안에 있다.
    - 모든 박스 내 배치 가능하다.
    - 옆에 다른 요소를 배치할 수 있다.
- **블록의 속성**
    - width / height 크기 조절 가능
    - padding, border, margin의 조절이 가능하다.

### 1.2.4. `display` 속성 사용

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11a9b3fc-5550-4358-89e1-12c9f0465126%2FUntitled.png?table=block&id=845afb86-f7f7-4aee-86af-ab1d3a03c66f&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1220&userId=&cache=v2)
