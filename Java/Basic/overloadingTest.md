# java - etc - overloading 타입 매칭 예시
* 오버로딩시 일치하는 타입이 없다면, 크기가 더 큰 타입을 조회하여 매치함

```java
package javaday1;

public class OverloadingTest {

	void method (byte num) {
		System.out.println("byte");
	}
	
	void method (short num) {
		System.out.println("short");
	}
	
	void method (long num) {
		System.out.println("long");
	}
	
//	void method (float num) {
//		System.out.println("float");
//	}
	
	void method (double num) {
		System.out.println("double");
	}
	
	public static void main(String[] args) {
		OverloadingTest test = new OverloadingTest();
    
		test.method(10);            // long (int가 없으므로 더 큰 long으로 매치)
		test.method((byte)10);      // byte
		
		test.method(3.14);	    // double
		test.method(3.14f);	   // double (float이 없으면 더 큰 double로 매치)
	}
}
```
