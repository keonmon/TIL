# Java - Basic - Math.random()메서드와 Random.nextInt() 비교
* 난수를 발생하는 Math.random()메서드와 Random.nextInt()를 비교한다.

## `Math.random()` 메서드
* 이 메서드에 int를 곱하면 0~int 까지의 난수를 리턴한다. 
```java
int score = (int)(Math.random()*101); // 0~100까지 난수
```
* 이 메서드의 문제점은 내부적으로 `Random.nextDouble()`메서드를 사용하므로 `Random.nextInt()`와 비교해 `약 두 배의 처리가 필요`하다.

## `Random.nextInt()` 메서드
* 0부터 Random.nextInt()의 인수값의 -1까지의 난수를 리턴
```java
		Random random = new Random();
		int a = 0;
    
		a = random.nextInt(5);
		System.out.println(a); // 0~4까지의 난수
		
		a = random.nextInt(5)+1;
		System.out.println(a); // 1~5까지의 난수
```
* 이 메서드는 비교적 `균일하게 분포된 값을 반환`한다.
<br>

**따라서 `Random.nextInt()`를 사용하는것을 추천**
> 가독성을 위해서라면 `Math.random()`을 사용하는 것도 좋을지도...
