# Java - Basic - super(super키워드)
- 상위 클래스를 호출하는 super키워드에 대해 자세히 정리

---

## super 키워드
- 상속관계에서 자식생성자에 `super` 키워드가 컴파일시 자동적으로 생성되는데 이것은 `부모 생성자를 호출하는 키워드`임.
- Java는 강제적으로 `부모 생성자 실행 → 자식생성자 실행` 의 순서로 실행하도록 구조되어있다.
- 괄호()안에 들어가는 인수에 따라 호출되는 부모의 생성자가 결정됨.

```java
public class InheritanceEx2 {
	public static void main(String[] args) {
		Child c1 = new Child();
		
	}
}

class Parent {
	
	Parent(int a){
		System.out.println("부모 생성자가 수행됨");
	}
	
}

class Child extends Parent{
	
	Child(){
		super(10);	// 컴파일시 자동으로 추가되는 코드 (부모 생성자를 호출함)
		System.out.println("자식 생성자가 수행됨");
	}
}
```
- 부모의 메서드를 사용하기 위해 `super.printInfo()` 에서 super 키워드를 사용함. → `이를 통해 코드양을 줄여 생산성을 올릴 수 있다.`
```java
public class InheritanceEx3 {
	public static void main(String[] args) {
		UniversityStudent u1 = new UniversityStudent("S001", "홍길동", 10, "컴공");
		u1.printInfo();
		
		Student s1 = new Student("S002", "강감찬", 8);
		s1.printInfo();
	}
}

// 학생 클래스
class Student{
	private String studentNo;
	private String name;
	private int age;
	
	// constructors
	public Student() {}
	public Student(String studentNo, String name, int age) {
		super();
		this.studentNo = studentNo;
		this.name = name;
		this.age = age;
	}
	
	// getters&setters
	...
	
	/**
	 *  출력 메서드
	 */
	public void printInfo() {
		System.out.println("---------------");
		System.out.println("학번 : " + studentNo);
		System.out.println("이름 : " + name);
		System.out.println("나이 : " + age);
	}
}

// 학생을 상속받은 대학생 클래스
class UniversityStudent extends Student{
	private String major;
	
	// getters&setters
	...

	// constructor
	public UniversityStudent() {}
	public UniversityStudent (String studentNo, String name, int age, String major) {
		super(studentNo, name, age);
		this.major = major;
	}
	

	/**
	 *  출력 메서드
	 */
	@Override
	public void printInfo() {
		  super.printInfo();	// 중복된 body 코드를 줄이기 위해, 부모의 같은 메서드를 활용
//		System.out.println("---------------");
//		System.out.println("학번 : " + getStudentNo());
//		System.out.println("이름 : " + getName());
//		System.out.println("나이 : " + getAge());
		System.out.println("전공 : " + major);
	}
}
```
