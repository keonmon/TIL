# java - Basic - 정수의 Overflow
* java의 취약점 중 하나라고 할 수 있는 overflow현상에 대해 정리

## 정수의 overflow 현상
* 변수타입 연산 결과가 허용 범위를 넘어가게 되면, 그 반대값(최소/최대)로 값이 바뀌어 버리는 현상
```java
// byte의 Overflow
byte b = 127; 
//byte b = 128; // error (byte = -128~127)
b++;
System.out.println(b);	// -128

// short의 Overflow
short s = Short.MAX_VALUE;	// 32767
// short s = 32768;	// error (short = -32768~32767)
s++;
System.out.println(s);  // -32768

```

