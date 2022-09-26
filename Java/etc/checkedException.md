# Java - etc - `checked`&`uncheckedException`
- 예외처리의 `checked Exception`과 `unchecked Exception`을 알아본다.
---

`checked`/`unchecked Exception`으로 구분되는데, **필수적으로 예외처리해야 하는 메서드인지 아닌지의 차이**

## `unchecked Exception`
- **예외처리를 생략해도 되는 메서드**
- `RuntimeException`클래스는 모두 **unchecked Exception**
- `RuntimeException`클래스를 상속받는다.

- `RuntimeException`클래스를 제외하면 전부 **checked Exception**이다

### `RuntimeException`클래스
- `unchecked Exception`로는 RuntimeException

---

## `checked Exception`
- **필수적으로 예외처리해야 하는 메서드**
- `Exception`클래스를 상속받는다.

### `IOException`클래스
- `checked Exception`
- 해당 메서드에서 예외처리를 하거나 -> `try-catch`
  또는, 상위 메서드로 책임을 넘길 수 있음  -> `throws`
```java
public class ExceptionEx2 {
	public static void main(String[] args) {
		OpenFile("aaa");
		/*
	 	해당 파일("aaa")은 존재하지 않습니다.
		에러메시지 : aaa (지정된 파일을 찾을 수 없습니다)
		 */
		
		System.out.println("==================");
		
		String fileName = "bbb";
		try {
			OpenFile2(fileName);
		} catch (IOException e) {
			System.out.println("해당 파일(\"" + fileName + "\")은 존재하지 않습니다.");
			System.out.println("에러메시지 : " + e.getMessage());
			/*
		 	해당 파일("bbb")은 존재하지 않습니다.
			에러메시지 : bbb (지정된 파일을 찾을 수 없습니다)
			 */
		}

	}
	
	// 메서드에서 직접 예외처리
	static void OpenFile(String fileName) {
		try {
			FileReader fe = new FileReader(fileName);
		} catch (FileNotFoundException e) {
			System.out.println("해당 파일(\"" + fileName + "\")은 존재하지 않습니다.");
			System.out.println("에러메시지 : " + e.getMessage());
		}
	}
	
	// 상위 메서드(main())에 예외 던지기(예외처리의무 넘기기)
	static void OpenFile2(String fileName) throws IOException {
		FileReader fr = new FileReader(fileName);
	}

}
```

<br>

---

## `사용자 정의 Exception` 만들기
```java
public class ExceptionEx3 {
	public static void main(String[] args) {
		try {
			add();
		} catch (DuplicateException e) {
			System.out.println("오류 : " + e.getMessage());
		}
	}
	
	static void add() throws DuplicateException{
		throw new DuplicateException("중복된 데이터입니다.");
	}

}

// 사용자 정의 Exception 생성
class DuplicateException extends Exception {
	// 메시지를 상위클래스(Exception)로 전달
	public DuplicateException(String message){
		super(message);
	}
}
```
