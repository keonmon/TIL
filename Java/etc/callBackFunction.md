# Java - etc - 콜백함수
- 콜백함수에 대해 정리한다.

---

## 콜백함수
- 서비스센터를 예를 들면, 
  1. 고객이 문의를 했으나 서비스센터 담당자가 부재
  2. 고객의 연락처를 남김
  3. 담당자가 돌아오면 고객에게 연락(호출)

## 활용 예시
```java
public class InterfaceEx2 {
	public static void main(String[] args) {
		Person p1 = new Person(new MyTimer(5));

		p1.doWork();  // 사람이 타이머를 작동시킴
	}

}

/**
 * interface
 *
 */
interface Tick {
	void onTime();
}


/**
 * MyTimer를 사용하는 사람 객체
 * Tick 인터페이스를 구현
 */
class Person implements Tick {
	MyTimer timer;  // 사람이 타이머를 
	
	public Person(MyTimer timer){
		this.timer = timer;
	}
	
	/**
	 * timer의 start()메서드를 실행하는 메서드
	 */
	public void doWork() {
		timer.setAction(this);	// 타이머에게 사용자의 의도가 들어간다고 해석
		this.timer.start();		// 타이머 실행
	}
	
	/**
	 * Tick의 onTime()을 구현한 콜백 메서드
	 * 
	 */
	@Override
	public void onTime() {
		System.out.println("타이머가 종료되었습니다. 가스불을 잠궈주세요");
	}
}

/**
 * 타이머 객체
 *
 */
class MyTimer {
	private int interval;
	private Tick operator;
	
	public MyTimer(int interval) {
		this.interval = interval;
	}
	
	/**
	 * Tick을 구현한 객체(Person)를 저장 
	 * @param operator
	 */
	public void setAction(Tick operator) {
		this.operator = operator;
	}
	
	/**
	 * 객체의 interval 변수만큼 초를 세며 표출하는 메서드
	 */
	public void start() {
		for(int i = interval; i > 0; i--) {
			System.out.println(i+"초 남았습니다...");
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		operator.onTime();
	}
	
}
```

### 출력내용

> 5초 남았습니다...   
> 4초 남았습니다...   
> 3초 남았습니다...   
> 2초 남았습니다...   
> 1초 남았습니다...   
> 타이머가 종료되었습니다. 가스불을 잠궈주세요   

  
