# Java - Basic - forEach(향상된 for문)
* for문의 다른 문법 중 하나인 foreach문을 정리한다

## foreach(향상된 for문)
* 주로 array타입의 값을 순차적으로 꺼내어 연산할 때 사용한다.
* foreach문의 문법은 다음과 같다
```java
int arr[] = new int[] {0,9,3,8};
for(int i : arr){ 
  ... 
}
```
* arr의 0번째 값부터 arr.length개의 값을 순차적으로 i에 대입한다.
<br>

## foreach문 활용 예시
* 배열의 순차적으로 꺼내어 총합을 구한다.
```java
// scoreArray에는 1~100값이 저장되어있다. 

int sum = 0;

for(int inx = 0; inx<scoreArray.length; inx++) {
	sum += scoreArray[inx];
}
System.out.println(sum);	// 5050

// 향상된 for문 활용----------------

sum = 0; // sum 초기화

// for(값을 담을 변수 : 꺼내어질 배열){ }
for(int v : scoreArray) {
	sum += v;
}
System.out.println(sum); // 5050
```

