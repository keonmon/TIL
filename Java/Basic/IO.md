# Java - Basic - IO.md (입/출력)
- Java의 데이터 입출력에 대해 복습하며 정리한다.

---

## I/O, (입/출력)
### stream
- 데이터를 운반(입출력) 하는데 사용되는 연결통로
- 연속적인 데이터의 흐름을 `흐르는 물`에 비유해서 붙여진 이름
- 하나의 스트림으로 입력과 출력을 동시에 불가능(`단방향성`)

## FileInput/FileOutput Stream

- 파일의 데이터를 입출력하는 **바이트기반** 스트림

```java
public class IOEx1 {
	public static void main(String[] args) throws Exception {
		final String INPUT_FILE = "input.txt";
		final String OUTPUT_FILE = "output.txt";
		
		FileInputStream fis = new FileInputStream(INPUT_FILE);
		FileOutputStream fos = new FileOutputStream(OUTPUT_FILE);
		
		int b;
		while(( b = fis.read()) != -1) {
			fos.write(b);
			System.out.println(b);
		}
		fis.close();
		fos.close();
	}
}

출력내용
[console] 
ìëíì¸ì~~~
ì¤ëì 9ì 26ì¼ìëë¤.
ê³§ 10ìì´ë¤ì~~
(byte(이진)데이터이므로 글자가 깨지는게 당연함)

[output.txt]
안녕하세요~~~
오늘은 9월 26일입니다.
곧 10월이네요~~
```

## FileReader/FileWriter

- 문자열 데이터를 처리할 때 사용한다.
- 음악, 이미지 등을 처리할 때는 부적합

```java
public class IOEx2 {
	public static void main(String[] args) throws Exception {
		final String INPUT_FILE = "input.txt";
		final String OUTPUT_FILE = "output.txt";
		
		FileReader fr = new FileReader(INPUT_FILE);
		FileWriter fw = new FileWriter(OUTPUT_FILE);
		
		int b;
		while(( b = fr.read()) != -1) {
			fw.write(b);
			System.out.print((char)b);
		}
		fr.close();
		fw.close();
	}
}
```

## BufferedReader/BufferedWriter

- 보조스트림

### 예제1

```java
public class IOEx3 {
	static int lineNumber = 0;
	
	public static void main(String[] args) throws Exception {
		final String INPUT_FILE = "input.txt";
		final String OUTPUT_FILE = "output.txt";
		
		FileReader fis = new FileReader(INPUT_FILE);
		FileWriter fos = new FileWriter(OUTPUT_FILE);
		
		BufferedReader br = new BufferedReader(fis);
		PrintWriter pw = new PrintWriter(fos);
		
		
		String oneLine;
		while((oneLine = br.readLine()) != null) {
			System.out.println(oneLine);
			pw.println(++lineNumber + ": " + oneLine);
		}
		
		br.close();
		pw.close();
		
	}
	
}

출력내용
[console]
안녕하세요~~~
오늘은 9월 26일입니다.
곧 10월이네요~~

[output.txt]
안녕하세요~~~
오늘은 9월 26일입니다.
곧 10월이네요~~
```

### 예제2

```java
public class IOEx4 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		//InputStreamReader br = new InputStreamReader(System.in);
		// System.in (byte단위)
		// InputStreamReader (byte단위 -> charactor단위)
		// BufferedReader (charactor단위 -> Line단위)
		
		String line;
		if((line = br.readLine()) !=null) {
			System.out.println("입력값: " + line);
		}
		br.close();
		
//		int line;
//		System.out.println("값을 입력하세요. (종료:q)");
//		while((line = br.read()) !=Integer.valueOf('q')) {
//			System.out.print((char)line);
//		}
//		br.close();
	}
}

출력내용

하하하
입력값: 하하하
```

### 예제 3

```java
public class IOEx3 {
	static int lineNumber = 0;
	
	public static void main(String[] args) throws Exception {
		final String INPUT_FILE = "input.txt";
		final String OUTPUT_FILE = "output.txt";
		
		FileReader fis = new FileReader(INPUT_FILE);
		FileWriter fos = new FileWriter(OUTPUT_FILE);
		
		BufferedReader br = new BufferedReader(fis);
		PrintWriter pw = new PrintWriter(fos);
		
		
		String oneLine;
		while((oneLine = br.readLine()) != null) {
			lineNumber++;
      
			// 파일 출력
			writeLineWithNumber(oneLine, pw);	
			// 파일은 생성하나 콘솔로 출력
			writeLineWithNumber(oneLine, new PrintWriter(System.out, true));	
		}
		br.close();
		pw.close();
	}
	
  // 
	static void writeLineWithNumber(String oneLine, PrintWriter out) {
		out.println(lineNumber + ": " + oneLine);
		
		
	}
}

출력내용
[console]
1: 안녕하세요~~~
2: 오늘은 9월 26일입니다.
3: 곧 10월이네요~~

[output.txt]
1: 안녕하세요~~~
2: 오늘은 9월 26일입니다.
3: 곧 10월이네요~~
```
