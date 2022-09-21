# Java - Basic - OOP(객체 지향 프로그래밍, Object Oriented Programming)


## 캡슐화(Encapsulation)
1. 객체 지향 프로그래밍에서의 ‘캡슐화’는 여러의미로 해석될 수 있다.
    * 변수 또는 함수를 논리적으로 하나로 묶는 것
    * Student클래스와 Book클래스로 분리한 것을 캡슐화라고 할 수 있다.
    * 그리고 멤버변수들을 메서드를 통해서만 변경할 수 있도록 하는 것.(getter/setter)


2. 객체 요소에 접근을 제한하는 것 (접근 제어자)
    * 자바에서의 접근제어자는 `public`, `protected`, `private`, `default` 가 있는데 이를 사용하여 객체로의 접근을 제한할 수 있다.
    * 예를 들어 `private은 해당 클래스 내부에서만 접근이 가능`하다.


3. 내부 데이터의 변경을 어렵게하여 보호하는 것 (정보 은닉)
    * 클래스의 변수를 `private로 선언`하여 변수 변경을 어렵게 하는 것


## 상속 Inheritance
* 객체 지향 프로그래밍의 중요한 특징 중 하나가 ‘상속’ 이다.
객체지향 프로그램은 유지보수가 편하고, 코드를 수정하거나 새로운 내용을 추가하는 것이 유연한데 그것의 기반이 되는 기술이 바로 ‘상속’이 된다.
`B클래스가 A클래스를 상속`받으면, `B클래스는 A클래스의 변수와 메서드를 사용`할 수 있다. 
여기서 `A클래스는 상위클래스(SuperClass)`고, `B클래스는 하위클래스(SubClass)`라고 한다. 

* 예를 들어, **포유류(A)는 사람(B)보다 더 일반적인 개념**인데, 이것은 사람(A)이 포유류(B)의 특징과 기능을 포함해 더 많거나, **추가적인 특징이 있다는 의미.**
이렇게 상송관계에는 `상위클래스(A)가 하위클래스(B)보다 더 일반적인 개념`이고, `하위클래스(B)는 상위클래스(A)보다 구체적인 클래스`가 된다.


## 다형성 Polymorphism
* 다형성이란, 하나의 코드가 여러 자료형으로 구현되어 실행되는 것을 말한다.
쉽게 말해 같은 코드에서 여러가지 실행결과가 나온다는 것.
이 ‘다형성’은 위에서 설명한 ‘상속’을 통해 나타나게 되는데, 이러한 특성을 잘 활용하면 유연하고, 구조화 된 코드를 구현하여 확장성있고 유지보수하기 좋은 프로그램을 개발할 수 있다.

* 상위클래스(A)에서 공통부분의 메서드를 제공하고, 하위클래스(B)에서는 그에 기반한 추가요소를 덧붙여 구현한다. 이러면 코드량이 줄어 가독성도 좋아질 뿐더러, 유지보수도 편리하게 된다.

```java
public class InheritanceEx4 {
	public static void main(String[] args) {
		Student s1 = new Student();
		s1.study();	// 학생이 도서관에서 공부를 합니다.

		UniversityStudent u2 = new UniversityStudent();
		u2.study();	// 대학생이 도서관에서 공부를 합니다.
		
		System.out.println("\n======다형성 적용======\n");
		
		Student s2 = new UniversityStudent();	// 가능
		s2.study();	// 대학생이 도서관에서 공부를 합니다.
		/* 대학생은 학생이다. (o) <- Student s = new UniversityStudent(); */
		
		// UniversityStudent s = new Student(); // 불가능
		/* 학생은 대학생이다. (x) <- UniversityStudent s = new Student(); */
		
	}
}

/**
 *  학생 클래스
 * @author Home
 */
class Student{
	
	// constructors
	public Student() {}
	
	/**
	 * 학생이 공부를 하는 메서드
	 */
	public void study() {
		System.out.println("학생이 공부를 합니다.");
	}
}

/**
 *  학생을 상속받은 대학생 클래스
 * @author Home
 */
class UniversityStudent extends Student{
	
	// constructor
	public UniversityStudent() {}
	
	@Override
	public void study() {
		System.out.println("대학생이 도서관에서 공부를 합니다.");
	}
}

```
