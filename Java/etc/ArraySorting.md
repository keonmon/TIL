# Java - etc - 배열 요소 정렬 알고리즘
* 배열의 요소를 오름차순 또는 내림차순으로 정렬하는 알고리즘을 구현한다.

## sorting 알고리즘
```java
int[] arr = new int[] {4, 7, 3, 1, 9};
		
// 정렬 전 배열요소 확인
System.out.println("정렬 전 배열요소");
for (int i : arr) {
  System.out.print(i + " ");	// 4 7 3 1 9
}

// 배열 정렬 시작 ('i+1'이 포인트!!!)
int tmp;
for (int i = 0; i < arr.length; i++) {
  for (int j = i + 1; j < arr.length; j++) {
  
    // i번째와 j번째의 요소를 비교-교환을 한다
    if(arr[i]>arr[j]) {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}

System.out.println();
// 정렬 후 배열요소 확인
System.out.println("정렬 후 배열요소");
for (int i : arr) {
  System.out.print(i + " ");	// 1 3 4 7 9 
}
```
