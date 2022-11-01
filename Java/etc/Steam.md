# Java - etc - Stream 객체
- Collection객체를 Stream 객체로 변환하여 요소에 접근하는 방법에 대해서 공부하고 정리한다.
---

# 1. Java - stream()

## 1.1. 활용 방법

- Collection 객체의 요소를 순회하여<br/>
**변환** `map()` , **조건추출** `filter()`, **정렬** `sort()`하는 방법을 설명한다.
    - **map** : element를 다른 요소 형태로 **변환**하여 return
    - **filter** : element를 **조건**에 따라 걸러내는 기능
    - **sort** : 요소들을 **정렬**

```java
  

ArrayList<String> list = new ArrayList<>(
        Arrays.asList("Apple", "Banana","Melon","Grapes","Strawberry")
);



//stream()
// 1. map : element를 다른 요소 형태로 변환하여 return

// collect(Collectors.toList()) : 변환된 배열 return
System.out.println(
    list.stream()
            .map(fruit -> fruit.toUpperCase() )
            .collect(Collectors.toList())   // List로 리턴
);  // [APPLE, BANANA, MELON, GRAPES, STRAWBERRY]

// findAny() : stream에서 첫번째 객체 return
System.out.println(
		list.stream()
		        .map(fruit -> fruit.toUpperCase() )
		        .findAny().get()
);  // APPLE

//===============================================

// 2. filter : element를 조건에 따라 걸러내는 기능
System.out.println(
    list.stream()
            .filter(fruit -> fruit.length() > 5)
            .collect(Collectors.toList())   // List로 리턴
);  // [Banana, Grapes, Strawberry]

//
list.stream()
        .filter(fruit -> fruit.length() > 5)
        .forEach(s -> System.out.println(s));
/*
  Banana
  Grapes
  Strawberry
*/

//================================================

// 3. sorted
System.out.println(
    list.stream()
            .sorted()
            .collect(Collectors.toList())   // List로 리턴
);  // [Apple, Banana, Grapes, Melon, Strawberry]
```
