# Java - etc - `short-circuit(숏서킷)`
* 자바가 논리연산을 수행할 때, 뒷 항의 연산을 건너뛰는 현상

## 숏서킷
1. `&& (AND)`연산의 경우
* &&연산의 경우 `앞항의 연산결과가 false`일 경우 뒷항의 결과에 상관없이 false이므로, `뒷항의 연산을 건너뛴다`.
```java
int a = 10;
int b = 5;
boolean c;

c = (a=5) > 5 && (b=10) > 5; // false && true == false

System.out.println("a:" + a + ", b:" + b + ", c:" + c);	
// a:5, b:5, c:false
// && 앞에서 이미 false가 나왔기 때문에 뒤의 b 연산은 skip한다
// 이를 'short-circuit(숏서킷)'라고 한다.

c = (a=5) > 3 && (b=10) > 5; // true && true == true
System.out.println("a:" + a + ", b:" + b + ", c:" + c);
// a:5, b:10, c:true
// && 앞에서 이미 false가 나왔기 때문에 뒤의 b 연산을 수행한다
```

2. `|| (OR)`연산의 경우
* ||연산의 경우 `앞항의 결과가 true`일 경우, 뒷항의 연산결과에 상관없이 true이므로, `뒷항의 연산을 건너뛴다`.
```java
int a = 10;
int b = 5;
boolean c;

c = (a=5) > 3 || (b=10) > 5; // true && true == true
System.out.println("a:" + a + ", b:" + b + ", c:" + c);
// a:5, b:5, c:true
// || 앞에서 이미 true가 나왔기 때문에 뒤의 b 연산은 skip한다
// 이를 'short-circuit(숏서킷)'라고 한다.

c = (a=5) > 5 || (b=10) > 5; // false && true == true
System.out.println("a:" + a + ", b:" + b + ", c:" + c);
// a:5, b:10, c:true
// ||(or) 앞에서 이미 false가 나왔기 때문에 뒤의 b 연산을 수행한다
```
