# 자바기초 / 상수와 리터럴
* 기초 개념/이론을 복습하기 위해 정리하기 위한 글

## 상수, 리터럴
* 상수(constant) : 한 번만 값을 저장 가능한 변수   
* 리터럴(literal) : 그 자체로 값을 의미하는 것   
  * `int a = 1;` ← 여기서 `1`이 리터럴
  * `final char b = "b";` ← 여기서 `b`가 리터럴

## 리터럴의 `접두사`와 `접미사`
|종류|리터럴|접미사(대소문자 구별X)|
|---|---|---|
|논리형|flase, true|없음|
|정수형|123, 0b0101, 077, 0xFF, 100L|L(Long)|
|실수형|3.14, 3.0e8, 1.4f, 0x1.0p-1|f(float), d(double, 생략허용)|
|문자형|'A' '1', '\n|없음|
|문자열|"ABC", "123", "A", "true"|없음|
```java
boolean power = true;
char ch = 'A';
String str = "ABC";

byte b = 127; // int타입의 리터럴을 byte타입인 변수b에 저장
byte b = 128; // 에러 (byte : -128~127)

int i = 100;      // 10진수
int oct = 0100;   // 8진수
int hex = 0x100;  // 16진수

long l = 10_000_000_000L; // (100억)

float f = 3.14f;  //(f 를 생략할경우, 리터럴이 double타입(float보다 큰 타입)으로 되므로 에러가 발생)
double d = 3.14d; //(d 생략가능)
```
