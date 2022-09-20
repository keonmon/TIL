# Java - Basic - static(정적)
* `static 키워드` 및 `static 초기화블럭`에 대해 자세히 알아본다

## `static 키워드`
* 정적, 고정적인 의미.
* 다른 것들보다 `먼저 메모리에 생성`됨.

### 모든 인스턴스에 공통으로 사용되어야 하는 것에 사용한다.
```java
public class ClassEx2 {
	public static void main(String[] args) {
		Car car1 = new Car("쏘나타");
		Car car2 = new Car("아반테N");
		
		car1.printInfo();	// 일련번호: C1, 모델명: 쏘나타
		car2.printInfo();	// 일련번호: C2, 모델명: 아반테N
	}
	
}

class Car {
	static int nextVal;
	String serialNo;
	String modelName;
	
	Car(String modelName) {
		this.serialNo = "C" + ++nextVal;
		this.modelName = modelName;
	}
	
	void printInfo() {
		System.out.println("일련번호: " + serialNo + ", 모델명: "+modelName);
	}
}
```

### static이 붙은 멤버변수는 인스턴스를 생성하지 않아도 사용할 수 있다.
* static이 붙은 멤버변수(클래스변수)는 클래스가 메모리에 올라갈때 이미 자동적으로생성되기 때문이다.

### static메서드의 body에서는 인스턴스(멤버) 변수를 사용할 수 없다.
* static이 메서드는 인스턴스 생성 없이 호출가능한 반면, 인스턴스 변수는 인스턴스를 생성해야만 존재하기 때문
* static 키워드가 붙은 메서드가 생성될 때, 인스턴스 변수는 생성되지 않은 상태이기 때문에 읽을 수 없다

### 메서드 내에서 인스턴스 변수를 사용하지 않는다면, static을 붙이는 것을 고려해본다.
* 메서드의 작업내용중에서 인스턴스 변수를 필요로 한다면, static을 붙일 수 없다.
* 반대로 인스턴스변수를 필요로 하지 않는다면, 가능하면 static을 붙이는 것이 좋다.
* 메서드 호출시간이 짧아지기 때문에 효율이 높아진다. (일반 메서드는 실행시 호출되어야할 메서드를 찾는 과정이 추가적으로 필요하기 때문)

### static 사용 지침 (아래의 경우 static 키워드 사용을 고)
1. 먼저 클래스의 멤버변수 중 모든 인스턴스에 공통된 값을 유지해야하는 것이 있는가?
2. 작성된 메서드 중, 인스턴스 변수를 사용하지 않는 메서드가 있는가?


## `static 초기화 블럭`
* static 초기화 블럭은 인스턴스 블럭과 달리 `최초 객체가 생성될 때만 호출`된다.
* 반면, `인스턴스 초기화 블럭은 각 객체가 생성될때 마다 호출`된다.
```java
public class StaticEx1 {
	public static void main(String[] args) {
		MyClass mc1 = new MyClass();
		MyClass mc2 = new MyClass();
		MyClass mc3 = new MyClass();
		
		/* <출력문>
		 * 
		 * static 블럭이 수행됩니다.. 
		 * static블럭은 처음 호출시에만 한번 작동합니다.
		 * 
		 * instance 블럭이 수행됩니다. 
		 * 생성자가 호출되었습니다. 
		 * instance 블럭이 수행됩니다. 
		 * 생성자가 호출되었습니다. 
		 * instance 블럭이 수행됩니다. 
		 * 생성자가 호출되었습니다.
		 */
	}
}

class MyClass{
	static {	// static 초기화 블럭
		System.out.print("static 블럭이 수행됩니다.."+"\n" + "static블럭은 처음 호출시에만 한번 작동합니다."+"\n\n");
	}
	
	{	// instance 블럭
		System.out.println("instance 블럭이 수행됩니다.");
	}
	
	public MyClass() {	// MyClass 생성자
		System.out.println("생성자가 호출되었습니다.");
	}
	
}
```
* 
