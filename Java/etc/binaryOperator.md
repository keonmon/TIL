# Java - etc - 이항연산자의 형변환 특징

## 이항연산자의 형변환
1. 이항연산자는 연산을 수행하기 전에 피연산자의 타입을 일치시킨다.
* `byte`, `char`, `short` -> `int`   
<br>

2. 피연산자 중 표현범위가 큰 타입으로 형변환한다.
* `byte`+`short` -> `int` + `int` = `int`
* `char`+`int` -> `int` + `int` = `int`
* `float`+`int` -> `float` + `float` = `float`
* `float`+`float` -> `float` + `float` = `float`
* `float`+`double` -> `double` + `double` = `double`

```java
byte b1 = 10;
short s1 = 20;
int r1;
short r2;

r1 = b1 + s1;
System.out.println("r1 : " + r1); // r1 : 30 (int)

r2 = (short)(b1 + s1); 
System.out.println("r2 : " + r2); // r2 : 30 (short)

double r3 = 20/3;
System.out.println("r3 : " + r3); // r3 : 6.0 (double)

b1 = (byte)(b1+b1);
System.out.println("b1 : " + b1); // b1 : 20 (byte)
```
