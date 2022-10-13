# JavaScript - variable 변수
- JavaScript의 변수 종류에 대해 학습하고 기록한다.
---

## 변수의 종류

- `var`, `let`, `const`

| var | 변수 중복 선언이 가능 |
| --- | --- |
| let | 블록 범위(scope)지역 변수를 선언<br>변수 중복 선언이 불가하지만, 재할당이 가능 |
| const | 블록 범위 읽기 전용 상수를 선언<br>반드시 선언과 동시에 초기화를 해야함. |


```jsx
var aa;
let bb;
const cc = 0;
//cc = 12; //error
bb = 'uber';

console.log(aa, bb, cc) // undefined | 'uber' | 0
```
