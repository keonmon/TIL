# Java - Basic - Collection Framework (컬렉션 프레임워크)
- 컬렉션 프레임워크에 대해 복습하고 정리한다.
- [Notion에서 보기](https://lgh.notion.site/22-09-24-ee7a65ef465a42f9963e0b5d8c42527e)
---

# 1. 컬렉션 프레임워크

- 분량이 크므로 목차를 기억하되, 눈으로 전체적인 윤곽만 보고 넘어가는 것이 중요!
- 그리고 실습을 통해 언제 어떻게 사용하는지만 기억하자!

### 컬렉션?

- `데이터`(물건)를 `모아놓은 것`

### 프레임워크?

- 틀
- `정형화된 프로그래밍` 방식
- 프레임워크를 사용하면 유지보수가 쉬워지는 특징이 있다.

### 그렇다면, 컬렉션 프레임워크는?

- `다수의 데이터`를 다루기 위한 `정형화된 프로그래밍`
- 컬렉션을 쉽고 편리하게 다루기 위한 클래스를 제공
- java.util 패키지에 포함되어있다. (JDK1.2부터 제공됨)

### 컬렉션 클래스

- 다수의 데이터를 저장할 수 있는 클래스 (vector, arraylist, hashmap 등)

## 핵심 인터페이스

### 1. List

- 순서가 있는 데이터의 집합
- 중복 허용
- `ArrayList`, LinkedList, Stack, Vector 등

### 2. Set

- 순서 없음
- 중복 비허용
- 예 : 양의 정수집합, 소수의 집합
- `HashSet`, TreeSet 등

### 3. Map

- `Key : Value`의 쌍으로 이루어진 데이터 집합
- 순서 없음
- 중복 비허용(key)
- 검색속도 `짱빠름`
- 예 : 우편번호, 지역번호(전화번호)
- `HashMap`, TreeMap, Hashtable, Preperties 등

---

# 2. Collection interface의 대표 메서드

- List, Set, Map이 상속하는 `Collection 인터페이스`의 메서드 중 대표 메서드만 몇 개 정리함.
    
    ### 1. `add()`, `addAll()`
    
    - 괄호안의 요소를 **추가**, 전체를 **추가**
    
    ### 2.1. `clear()`
    
    - 저장된 모든 객체를 **삭제**
    
    ### 2.2. `remove()`, `removeAll()`
    
    - 지정한 객체 삭제, 전체 **삭제**
    
    ### 3. `contains()`, `containsAll()`
    
    - 해당 객체가 있는지 **검색**(확인)
    
    ### 4. `size()`
    
    - 저장된 객체 개수(크기)를 반환

## 2.1. List 인터페이스

- 순서O, 중복O
- 대표적으로 **ArrayList**, **LinkedList**, Vector가 상속받고 있음
    
    ### 1. `add()`, `addAll()`
    
    - 객체를 추가
    
    ### 2. `remove()`
    
    - 객체를 삭제
    
    ### 3. `get()`
    
    - 객체를 반환
    
    ### 4. `set()`
    
    - 객체를 변경
    
    ### 5. `indexOf()`, `lastIndexOf()`
    
    - 객체를 검색(순방향 / 역방향)

### List 예제

```java
public static void main(String[] args) {
	Student s1 = new Student("S001", "홍길동", 10);
	Student s2 = new Student("S002", "강감찬", 20);
	Student s3 = new Student("S003", "이순신", 30);
	
	ArrayList<Student> list = new ArrayList<>();

	// 객체 저장 add()
	list.add(s1);
	list.add(s2);
	list.add(s3);
	
	for(Student s : list) {
		System.out.println(s);
	}
	
	// 객체 수정 set()
	Student s4 = new Student("S002", "김길동", 60);
	list.set(1, s4);
	
	// 객체 반환 get()
	System.out.println("==get(1)==");
	System.out.println(list.get(1));
	
	// 객체 삭제 remove()
	System.out.println("==remove(0)==");
	list.remove(0);
	for(Student s : list) {
		System.out.println(s);
	}
	
	// 객체 검색 indexOf()
	System.out.println("==indexOf()==");
	System.out.println(list.indexOf(s4));	// 0 (index)
	System.out.println(list.indexOf(s3));	// 1 (index)
	System.out.println(list.indexOf(s1));	// -1 이미 삭제되었으므로!
	System.out.println(list.indexOf(s2));	// -1

}
```

### 출력내용

```
학번: S001
이름: 홍길동
나이: 10

학번: S002
이름: 강감찬
나이: 20

학번: S003
이름: 이순신
나이: 30

==get(1)==
학번: S002
이름: 김길동
나이: 60

==remove(0)==
학번: S002
이름: 김길동
나이: 60

학번: S003
이름: 이순신
나이: 30

==indexOf()==
0
1
-1
-1
```

## 2.2. Set 인터페이스

- 순서X, 중복X
- **HashSet**, TreeSet이 상속받고 있음
- Collection인터페이스와 메서드가 동일
- 집합(Set)과 관련된 메서드를 기억해두는 것이 좋다.

### 집합관련 Set 메서드

- boolean을 반환한다. (변화O : true, 변화X : false)
    
    ### `addAll(Collection c)` - 합집합
    
    - c객체들을 추가
    
    
    ### `containsAll(Collection c)` - 부분집합
    
    - 지정된 객체들이 c객체를 포함했는지 확인
    
    
    ### `removeAll(Collection c)` - 차집합
    
    - 지정된 객체에 c를 포함한 객체를 제거
    
    
    ### `retainAll(Collection c)` - 교집합
    
    - 공통된 객체를 제외한 나머지를 제거
    
    

## 2.3. Map 인터페이스

- 순서X, 중복X(key)
- Hashtable, **HashMap**, SortedMap이 상속받고 있음

### 1.1. `put(k,v)`

- 객체를 key-value 쌍으로 저장

### 1.2. `putAll(Map m)`

- Map을 통째로 저장

### 2. `remove(k)`

- 해당 key를 가진 객체를 삭제

### 3.1. `containsKey(k)`, `containsValue(v)`

- 해당 key 또는 value를 가진 객체가 있는지 확인

### 3.2. `get(k)`

- 지정된 key값을 가진 객체를 반환

### 4. `keySet()`, `values()`

- 해당 Map의 모든 key값 또는 모든 value값을 반환한다.
- `keySet()`은 Set타입으로반환
- `values()`는 Collection타입으로 반환

### 5. `entrySet()`

- Map에 저장되어있는 key-value쌍을 **Entry타입** 객체로 모은 **Set을 반환**
- `하나의 k-v쌍 == 하나의 Entry타입`

### Map예제

```java
// Map 선언 및 데이터 넣기 (테스트용 Map)
Map<String,String> map2 = new HashMap<>();
map2.put("banana", "yellow");
map2.put("grape", "green");
map2.put("strawbarry", "red");

System.out.println("===전체출력===");
System.out.println(map2);	//{banana=yellow, strawbarry=red, grape=green}

System.out.println("\n===get()===");
System.out.println(map2.get("banana"));	// yellow

System.out.println("\n===containsValue()===");
System.out.println(map2.containsValue("red"));	// true
System.out.println("\n===entrySet()===");
System.out.println(map2.entrySet());	//[banana=yellow, strawbarry=red, grape=green]
System.out.println("\n===keySet()===");
System.out.println(map2.keySet());	//[banana, strawbarry, grape]
System.out.println("\n===values()===");
System.out.println(map2.values());	//[yellow, red, green]

// 그렇담 특정 키값을 가져오고싶다면? (value값이 아닌)
System.out.println("\n===for문과 entrySet()을 활용한 key, value 출력===");
for(Entry<String,String> e : map2.entrySet()) {
	System.out.println("key : " + e.getKey() + ", value : " + e.getValue());
}
```

### 출력내용

```
===전체출력===
{banana=yellow, strawbarry=red, grape=green}

===get()===
yellow

===containsValue()===
true

===entrySet()===
[banana=yellow, strawbarry=red, grape=green]

===keySet()===
[banana, strawbarry, grape]

===values()===
[yellow, red, green]

===for문과 entrySet()을 활용한 key, value 출력===
key : banana, value : yellow
key : strawbarry, value : red
key : grape, value : green
```

---

# 3. ArrayList 살펴보기

- 기존의 Vector를 개선함
- 그러나 동기화 처리가 불가능 (Vector는 가능)
- List인터페이스를 구현하므로 순서O, 중복O
- 배열 기반임

## 3.1. 사용 시 주의점

### 1. remove(idx), remove(obj)의 차이 구분

```java
List<Integer> list = new ArrayList<Integer>();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.remove(1); // index가 1인 객체를 삭제(2객체가 삭제됨)
System.out.println(list);	//[1, 3, 4, 5]
list.remove((Integer)1); // 1을 삭제
// list.remove(new Integer(1)); // 1을 삭제(deprecated)
System.out.println(list);	//[3, 4, 5]
```

### 2. ArrayList 중간에 객체를 삭제, 추가할 때 프로그램에 부담을 줌

- `list.remove(n)`을 실행하면 list[n]의 뒷 객체들이 순차적으로 이동(복사)하는 과정을 거치게 된다. (`list.add(n, obj)` 는 반대의 과정)
- 마지막 객체 삭제는 부담X (이동할 일이 없음)


---

# 4. LinkedList 살펴보기

## 4.1. 배열의 장단점

### 장점

- **구조가 간단**
- **접근이 빠름**
    
    

### 단점

- **크기 변경X**
    - 변경 필요 시에는 새로운 배열을 생성 후 데이터를 복사함
- **순차적이지 않은 데이터 추가 삭제 시에는 시간이 많이 걸림** 
(ArrayList에서 설명한 데이터 이동 과정을 거침)

## 4.2. LinkedList는 배열의 단점을 보완함!!

1. **불연속적**으로 존재하는 데이터(노드)를 서로 연결시켰음 (단점1을 보완)
2. 데이터의 **삭제/추가** 시 시간이 비교적 **빠름** (단점2를 보완)

## 4.3 LinkedList의 단점

- 데이터 접근성이 나쁨
    - 순차적으로 접근해야하는 단점이 있음
    - 이를 보완한 것이, **이중연결리스트(doubly linked list)**와 이중원형연결리스트(doubly circular linked list)
    - 자바는 **이중연결리스트(doubly linked list)를 채택**함

---

# 5. Stack & Queue 살펴보기

## ▶Stack

- 마지막에 넣은 데이터를, 가장 먼저 꺼냄
- **상자에 물건넣고 꺼내는 원리**
- 배열로 Stack을 구현하는 것이 유리
- 활용 : 수식계산, 수식 괄호검사, undo/redo, 뒤로/앞으로

## ▶Queue

- 먼저 넣은 데이터를, 가장 먼저 꺼냄
- **줄서서 입장하는 원리**
- 링크드리스트로 Queue를 구현하는 것이 유리
- 활용 : 최근사용문서, 대기목록, 버퍼(buffer)

## 5.1. Methods

## ▶Stack

`Stack st = new Stack();`

### push()

- 객체를 Stack에 **저장**

### peek()

- 가장 나중에 넣은 객체를 **반환 (삭제X)**

### pop()

- 가장 나중에 넣은 객체를 Stack에서 **삭제**

### search()

- 객체를 찾아 그 **위치를 반환**
(idx가 아니므로 **1부터 시작되며, 1은 가장 나중에 넣은 객체임**)

### empty()

- Stack이 비어있는지 확인

## ▶Queue

- Queue는 **인터페이스로 정의**되어있음
    - `LinkedList`가 이 인터페이스를 구현하고 있음

`Queue q = new LinkedList();`

### offer()

- 객체를 queue에 **저장**

### peek()

- 가장 처음에 넣은 객체를 **반환 (삭제X)**

### poll()

- 가장 처음에 넣은 객체를 Queue에서 **삭제**

### add()

- 객체를 queue에 **저장**
- 저장공간이 부족하면 **예외 발생**

### remove()

- 가장 처음에 넣은 객체를 **반환 (삭제X)**
- 이미 Queue가 비어있으면 **예외 발생**

### element()

- 가장 처음에 넣은 객체를 Queue에서 **삭제**
- 이미 Queue가 비어있으면 **예외 발생**

---

# 6. Iterator, ListIterator

- 컬렉션에 저장된 데이터를 순회하며 접근(읽기)하는데 사용하는 인터페이스
- 데이터마다 구조가 다르므로 조회하는 방법도 가지각색인데, 
이러한 불편을 해소하기 위해 **데이터 조회를 편리하게 하기 위해 표준화** 한 것.
- ListIterator는 Iterator의 향상된 버전 (양방향으로 순회 가능)
- Enumeration라는 것도 있음 (Iterator의 구버전)
- 

## 6.1. 대표메서드

### `hasNext()`

- **다음 요소**가 있는지 **확인** (true/false)

### `next()`

- 다음 요소를 **읽어온다**.
- 이를 호출하기 전에 `hasNext()`를 호출해서 **확인하는 것이 필수**!

## 6.2. 활용 방법

- 컬렉션 객체에 `iterator()`를 호출하면, `Iterator`로 구현한 객체를 반환한다.
- ‘Iterator’ 객체는 **일회용**임. 한 번 사용하면 다시 호출하여 불러와 사용해야한다.

```java
List list = new ArrayList();     // ArrayList 객체 생성
Iterator it = list.iterator();   // iterator()를 호출하여 iIterator객체에 저장

while(it.hasNext()){             // 다음 요소가 있는지 확인
	System.out.println(it.next()); // 다음 요소를 가져옴
}
```

## 6.3. Map은 Iterator가 없다!?

- Map에는 iterator가 없다.
- `keySet()`, `entrySet()`, `values()`를 호출해야 한다.

```java
Map map = new HashMap();
...
// Set eset = map.entrySet();
// Iterator it = eSet.iterator();
Iterator it = map.entrySet().iterator();  // <- 한 줄로 쓰면
```

---

# 7. Arrays 대표 메서드

## toString()

- 배열의 출력

## copyOf(), copyOfRange()

- 배열의 복사

## fill(), setAll()

- 배열 채우기

```java
int[] arr = new int[5];
Arrays.fill(arr, 9); // -> arr = [9,9,9,9,9]
```

## sort()

- 배열의 정렬

```java
int[] arr = {3,2,0,1,4};
Arrays.sort(arr);  // 배열 arr을 정렬
System.out.println(Arrays.toString(arr));  // [0,1,2,3,4]
```

## asList(Object… a)

- 매개변수가 가변매개변수임 `Object... a`
    - 가변매개변수 : 갯수가 정해져 있지 않은 매개변수
- 배열을 List로 변환

```java
List list = Array.asList(1,2,3,4,5);  // list = [1,2,3,4,5]
List list = new ArrayList(Arrays.asList(1,2,3,4,5));
```

---

# 8. HashMap 살펴보기

- Map인터페이스를 구현 대표적인 컬렉션 클래스
- 데이터를 **키**와 **값**의 쌍으로 저장
- 기본적으로 순서가 없으나, 순서를 유지하려면 LinkedHashMap을 사용한다.
- **해싱(Hashing)기법**으로 데이터를 저장하여 **검색이 무진장빠름**.

> **키(Key)**       : 컬렉션 내의 key 중 **유일**해야 함.
**값(Value)**    : Key와 달리 데이터 **중복을 허용**
> 

## 8.1. HashMap 주요 메서드

### `HashMap()`

- 생성자를 생성하는 것
- 인수로 배열 초기용량을 결정할 수 있음
- Map타입을 인수로 지정하면 HashMap으로 저장되어 반환함.

### `put(key, val)`, `putAll(map)`

- k-v 쌍으로 저장
- map타입 객체를 저장하면 통째로 저장

### `remove(key)`

- 해당 key인 객체 삭제

### `replace(key, val)`

- 해당 키의 값을 새로운 값으로 변경

### `keySet()`, `values()`

- 해당 Map의 모든 key값 또는 모든 value값을 반환한다.
- `keySet()`은 Set타입으로반환
- `values()`는 Collection타입으로 반환

### `entrySet()`

- Map에 저장되어있는 key-value쌍을 **Entry타입** 객체로 모은 **Set을 반환**
- `하나의 k-v쌍 == 하나의 Entry타입`

---

# 9. Collections

## 9.1. 컬렉션을 위한 static 메서드를 제공한다.

1. **컬렉션 채우기, 복사, 정렬, 검색**
    - `fill()`, `copy()`, `sort()`, `binarySearch()`등

1. **컬렉션의 동기화**
    - 동기화를 지원하지 않는 객체에 **동기화를 제공**해준다.
    - `synchronizedXXX()`
    
    ```java
    List syncList = Collections.synchronizedList(new ArrayList(...));
    ```
    

1. **변경 불가(readOnly)한 컬렉션 만들기**
    - `unmodifiableXXX()`

1. 싱클톤 컬렉션 만들기
    - `singletonXXX()`

1. 한 종류의 개체만 저장하는 컬렉션 만들기
    - `checkedXXX()`
    
    ```java
    List list = new ArrayList();
    List checkedList = checkedList(list, String.class); // String객체만 저장 가능
    checkedList.add("abc");          // OK!
    checkedList.add(new Integer(3)); // error
    ```
