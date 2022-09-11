# Java - Basic - 형변환

## 1. 문자`char` <-> 숫자(`int`)간의 변환
* '3' -> 3    
`문자 '0'을 빼면` char type이 int type으로 된다.
```java
System.out.println('3' - '0' - 1); // 2
```

* 3 -> '3'    
`문자 '0'을 더하면` char type이 된다.
```java
System.out.println(1 + '0' + 1);  // '1' => 49
```



## 2. ?? -> 문자열`String` 변환    
`빈 문자열 ""을 더하면` String type이 된다.
```java
System.out.println(1 + "" + 1);   // "11"
System.out.println('1' + "" + 2); // "12"
```


## 3. 문자열`String` -> 숫자(`int`,`double`) 변환    
정수형 type으로 변환 : `Integer.parseInt()`    
실수형 type으로 변환 : `Double.parseDouble()`
```java
System.out.println(Integer.parseInt("10") - 9);   // 1
System.out.printf("%.2f", Double.parseDouble("3.14") - 1.1);   // 2.04
```
## 4. 문자열`String` -> 문자`char`타입 변환   
`"".charAt(0)` 사용
```java
System.out.println("5".charAt(0) - 4);   // '5' => 53 => 53-4 => 49
```
```java
String ten = "9";
System.out.println(ten.charAt(0) + '5');   // 57 + 53 => 110
```
