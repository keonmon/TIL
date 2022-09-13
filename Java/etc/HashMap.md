# Java - etc - HashMap
* HashMap class에서 특정 mathod에 대해 정리한다.

## KeySet()
* key값만 필요할 때 사용
```java
HashMap<String, Object> computers = new HashMap<String, Object>();
computers.put("BOOK1", 30000);
computers.put("BOOK2", 15000);
computers.put("BOOK3", 25000);

System.out.println(computers.keySet()); // [BOOK3, BOOK2, BOOK1]

for (String key : computers.keySet()) {
    System.out.println(key);
}
/*
 * BOOK3
 * BOOK2
 * BOOK1
 */
```

## EntrySet()
* Map에 저장되어있는 Entry객체를 반환
* Entry객체 : Map에 저장 되어지는 하나의 Key, Value로 구성되는 객체
* key와 value 모두 필요할 때 사용
```java
System.out.println(NumberFormat.getCurrencyInstance().format(totalBook));
		
HashMap<String, Object> computers1 = new HashMap<String, Object>();
computers1.put("BOOK1", 30000);
computers1.put("BOOK2", 15000);
computers1.put("BOOK3", 25000);

System.out.println(computers1.entrySet());  // [BOOK3=25000, BOOK2=15000, BOOK1=30000]

for (Entry<String, Object> entry : computers1.entrySet()) {
    System.out.println(entry);
}
/*
 * BOOK3=25000
 * BOOK2=15000
 * BOOK1=30000
 */
```
