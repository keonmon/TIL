## Java - etc - Call by value/Reference (기본형/참조형 매개변수)
* 기본/참조형 매개변수의 특징에 대해 알아본다.

## 기본형 매개변수 (Call by value)
* 변수의 값을 읽기만 할 수 있다(readOnly)

```java
public class MethodEx1 {
	public static void main(String[] args) {
		Operation op = new Operation();
		int a = 10;

		op.increament(a);     //increament메서드의 a : 11
		System.out.println("main()의  a : " + a);    //main()의  a : 10

	}
}

class Operation{
	void increament(int a) {
		a++;
		System.out.println("increament메서드의 a : " + a);
	}
}
```

## 참조형 매개변수(Call by Reference)
* 변수의 값을 읽고 변경할 수 있다.(read&write)
```java
public class MethodEx1 {
	public static void main(String[] args) {
		Operation op = new Operation();
		Operend op1 = new Operend();
		op1.a = 10;
    
		op.increament(op1);   //increament메서드의 a : 11
		System.out.println("main()의  op1.a : " + op1.a);  //main()의  op1.a : 11
	}
}

class Operend {
	int a;
}

class Operation{
	void increament(Operend op) {
		op.a++;
		System.out.println("increament메서드의 a : " + op.a); 
	}
}
```
