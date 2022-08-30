# Java - 날짜/시간 관련 클래스
* Java에서 날짜와 시간에 관련된 Class를 정리한다.
* `Date`, `Calendar`, `LocalDate`, `SimpleDateFormat` 등
<br>

## Date & SimpleDateFormat
* `java.util.Date`
> ```java
> Date dt = new Date();
> SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
> System.out.println(sdf.format(dt)); // 2022-08-30
> ```
* 대부분 생성자/메서드가 Deprecated(지원종료)가 되어있다.
* `SimpleDateFormat` 클래스로 원하는 형태로 변환한다.

## Calendar
* `Date`가 가지는 단점을 해결된다.
* `java.util.Calendar`
* `Calendar`클래스는 인터페이스로 추상클래스다. (`Calendar.getInstance()`메서드로 인스턴스를 생성한다.)
> ```java
> // Calendar 인스턴스 생성
> Calendar cal = Calendar.getInstance();
> 
> // 현재날짜에 원하는 만큼 연산이 가능하다.
> cal.add(Calendar.MONTH,1);
> 
> //Date 객체에 달아 형식 지정이 가능하다.
> dt = cal.getTime();
> System.out.println(new SimpleDateFormat("yyyy-MM-dd").format(dt));  // 2022-09-30
> ```
#### Calendar가 가지는 문제점
* 불변객체가 아니다
  * set 메서드를 제공하여, 불변객체가 아니기 때문에 여러곳에서 공유되어 사용딘다면 원치 않은 결과값을 얻는 문제가 생긴다.
* int 상수 필드의 남용
  * 하루를 더하는 계산이지만, `cal.add(Calendar.DECEMBER,1);`이라는 값이 와도 컴파일 과정에서 오류를 잡지 못한다.
``` java
cal.add(Calendar.DATE,1); // +1일
```
<br>

* 난해한 월 지정
``` java
cal.set(2020,8,30); // 2020-09-30 (월 상수값은 0부터 시작된다.)
```
<br>

* 일관성 없는 요일 상수
  * `Calendar 일요일 상수 = 1` / `Date 일요일 상수 = 0` 
``` java
// 2020-08-30 SUNDAY
cal.get(Calendar.DAY_OF_WEEK); // 1
Date dt = cal.get.Time();
dt.getDay();  // 0
```
<br>

* Java.util.Date의 하위클래스 문제
  * equals 대칭성의 문제
  * 하위클래스 timestamp에 대해 객체 `a.equals(b); // true` 라면 `b.equals(a); // false`인 문제가 있었다.
<br>

* 1.8 이후 time패키지가 등장한다.
<br>

## java.time 패키지 (LocalDate, LocalTime, LocalDateTime 등)
* LocalDate
  * Calendar와 다르게 month의 상수값은 인간의 달력과 일치한다.
> ```java
> LocalDate curDate = LocalDate.now(); // 2022-08-30
> LocalDate targetDate = LocalDate.of(2022,9,2);  // 2022-09-02
> ```
<br>

* LocalTime
  * 매우 직관적인 시간 클래스 
  * `LocalTime.of(시,분,초,밀리초);`로 지정가능
> ```java
> // LocalTime
> LocalTime curTime = LocalTime.now();    // 22:35:50.126475
> LocalTime targetTime = LocalTime.of(22,8,30);   // 22:08:3(22시 08분 30초)
> ```
<br>

* LocalDateTime 
  * 날짜와 시간 모두 표현하고 싶을 때 사용
> ```java
> // LocalDateTime
> LocalDateTime curDateTime = LocalDateTime.now();
>
> LocalDate curDate = LocalDate.now();
> LocalTime curTime = LocalTime.now().plusHours(1); // 시간 1 증가
> LocalDateTime targetDateTime = LocalDateTime.of(curDate, curTime);
>
> System.out.println(curDateTime);    // 2022-08-30T23:40:10.328684
> System.out.println(targetDateTime);     // 2022-08-30T22:40:10.328907
> ```

* DateTimeFormatter로 날짜/시간 형식을 지정한다. (java.util.format.DateTimeFormatter)
  * `LocalDateTime.format()`의 인수로 `DateTimeFormatter`형식을 받아 `String을 반환`한다. 
> ```java
> LocalDateTime curDateTime = LocalDateTime.now(); 
> System.out.println(curDateTime); // 2022-08-30T22:49:43.328684
> 
> System.out.println(curDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
> // 2022-08-30 22:49:43
> ```

