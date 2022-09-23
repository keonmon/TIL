# Java - Basic - Object(Object 클래스)
- Object클래스에 대해 간단 정리
- Java의 Object객체의 오버라이딩에 대해 정리한다.
- `toString()`, `equals()`

---

## Object 클래스
- 상속하지 않는 클래스는 `자동적으로 Object 클래스를 상속`받는다. (모든 클래스는 Object를 상속받는다.)
- `상속계층 최상위`에는 Object가 있다.

## `toString()`과 `equals()` overriding 예제
```java
public class ToStringEx1 {
	public static void main(String[] args) {
		Student s1 = new Student("S001", "홍길동", 10);
		Student s2 = new Student("S002", "강감찬", 20);
		Student s3 = new Student("S001", "홍길동", 10);
		
		System.out.println("▶s1 학생 정보: " + s1);
		System.out.println("▶s2 학생 정보: " + s2);
		System.out.println("▶s3 학생 정보: " + s3);
		
		if(s1.equals(s3)) {
			System.out.println("## s1과 s3는 같습니다.");
		}else {
			System.out.println("## s1과 s3는 다릅니다.");
		}
	}
}

class Student {	// Object를 extends 중
	private String studentNo;
	private String name;
	private int age;
	
	public Student(String studentNo, String name, int age) {
		super();
		this.studentNo = studentNo;
		this.name = name;
		this.age = age;
	}

	// toString() 재정의	
	@Override
	public String toString() {
		return "\n학번: " + studentNo + "\n이름: " + name + "\n나이: " + age + "\n";
	}
	
	// equals() 재정의
	@Override
	public boolean equals(Object obj1) {
		if(obj1 == null || !(obj1 instanceof Student)) {
			return false;
		}
		Student s = (Student)obj1;
		
		if(studentNo.equals(s.studentNo) && name.equals(s.name) && age == s.age) {
			return true;
		} else {
			return false;
		}
	}
	
}
```
### 출력내용
> ▶s1 학생 정보:   
> 학번: S001    
> 이름: 홍길동    
> 나이: 10    
> 
> ▶s2 학생 정보:     
> 학번: S002    
> 이름: 강감찬    
> 나이: 20     
> 
> ▶s3 학생 정보:     
> 학번: S001    
> 이름: 홍길동    
> 나이: 10    
> 
> \## s1과 s3는 같습니다.    
