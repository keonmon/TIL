# Java - Basic - 증감연산자

## 증감연산자 특징   
`int a = 2;`
* `int j = ++a ;` -> `j : 3`
  * a를 증가 후, j변수에 대입  
* `int j = a++ ;` -> `j : 2`
  * j에 대입 후, a를 증가


```java
int a = 10;
int b;
b = ++a;
System.out.println("b : " + b + ", a : "+a);	// b : 11, a : 11

// --------

a = 10;	// a를 10으로 다시 초기화
b = a++;
System.out.println("b : " + b + ", a : "+a);	// b : 10, a : 11
```
