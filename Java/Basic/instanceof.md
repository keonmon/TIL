# Java - Basic - `instanceof 연산자`
* 객체를 비교하는 instanceof 연산자에 대해 정리한다.

## 연산자 `instanceof`
- 참조변수가 참조하는 인스턴스의 실제 타입을 체크
- 이항연산자이며 피연산자는 참조형 변수와 타입.
- 연산 결과는 `boolean`
- 연산결과가 `true` → 해당 타입으로 `형변환이 가능`하다는 의미

```java
if(c instanceof Car){ // c 가 Car 맞음?
  ...
}
```
