### 코드 주석

# 코드 주석 처리
```python
print("안녕") # <- console 출력
print('헤헤헤')
print('안녕', '건희야')

'''
여러줄의 주석은 이렇게 달아요
아시겠어요?
'''
print('주석2')

"""
주석을 작성하는 또 다른 방법은 
'쌍따옴표'를 3개 연달아서 앞뒤로 쓰는 방법이 있어요!
"""
print('주석3')
```

- `코드 셀`을 `텍스트 셀`로 변환: `Ctrl`+`M`+`M`
- `텍스트 셀`을 `코드 셀`로 변환: `Ctrl`+`M`+`Y`

# 파이썬 설치
- https://python.org에 접속 후 Download에서 다운받아 설치
- 설치 중 `Add Python 3.10 to PATH` 옵션을 선택해 전역변수로 설정한다.
  - 전역변수로 하면 어디서나 파이썬을 실행할 수 있다.

# 출력


## print() : 기본적인 출력
- 서식 지정 출력
`print('서식지정자' %값)`
  - %d 정수
  - %s 문자열
  - %f 실수 (%.3f -> 소수점 3자리수)
```python
print('나는 %d개의 빵을 갖고 있다' %3)
print('나의 이름은 %s입니다' %'이건희')
print('%s은 %.3f(반올림)입니다' %('원주율', 3.147592))
```

  ## format() : 숫자를 문자열로 변환하여 다양하게 출력
  `print('저의 이름은 {}이고, 생년월일은 {}년 {}월 {}일 입니다.'.format('이건희',2019,09,02))`
```python
from datetime import datetime # datetime모듈 import
today = datetime.today() # today에 현재날짜를 저장함
print('현재 날짜:', today.strftime('%Y')+'-'+today.strftime('%m')+'-'+today.strftime('%d'))

y,m,d = 1991,9,2
a='' # 만나이가 저장될 변수

if(today.month >= m and today.day >= d):
  a=today.year-y
else:
  a=today.year-y-1

# format()을 이용한 출력
print('저의 이름은 {}이고, 생년월일은 {}년 {}월 {}일 입니다.\n따라서, 현재 나이는 {}살 입니다.'.format('이건희',y,m,d,a))
```

# 입력

## input() 
`input('사용자에게 보여지는 데이터(생략가능)')`
- 프로그램 사용자로부터 데이터를 입력받을 때 사용.
- **문자열**을 return 한다.
```python
name = ''
while(name is None or name == ''):
  name = input('이름을 입력해주세요~!\n')

  if(name is not None or name != '' ):
    print('반갑습니다 %s님😊' %name)
  else:
    print('이름을 입력하지 않으셨어요..!😥')
```

# 형변환


- `int(value)`: 정수형으로 변환 
  - `int(4.5)` -> 4
- `float(value)`: 실수형으로 변환 
  - `float(4)` -> 4.0
- `eval(value)`: 정수/실수형으로 변환 
  - `eval('3*3')` -> 9
  - `eval('3*3.1')` -> 9.3
- `str(value)`: 문자열로 변환 
  - `str(123)` -> '123'

```python
print(
int(4.5),
float(4),
eval('3*3'),
eval('3*3.1'),
str(123)
)
```
## 형변환 예제
```python
# 원의 지름을 정수로 입력받아 원의 둘레를 출력하고, int를 사용하지 않을 때와 비교
num = int(input('원의 지름을 입력하세요 \n')) # input을 정수형으로 받아 저장
circle1 = num*3.14;

print('원의 지름은 %d' %circle)
print('원의 지름은 %.2f' %circle)
```

# python의 자료형


## 기본 자료형
- Number: 숫자형, 사칙연산
- String: 문자열, `'` 또는 `"`로 감싸 사용
- Boolean: 참/거짓, `True`, `False`

## 컨테이너 자료형
  - 리스트(List): index가 있는 여러가지 자료의 목록
    - `list1 = ['이건희', 1991, 9, 2, True]`
  - 튜플(Tuple): 리스트와 같이 index가 있는 data 목록 형태지만, 값 수정 불가능
    - 소괄호()로 묶어 표현 `tuple1 = ('이건희', 1991, 9, 2, True)`
  - 딕셔너리(Dictionary): key를 가진 자료의 목록
    - 중괄호{}로 묶어 `{key:value}`쌍으로 표현
    - `dic1 = {'이건희':1991}`

```python
list1 = ['이건희', 1991, 9, 2, True]
tuple1 = ('이건희', 1991, 9, 2, True)
dictList1 = [{'이건희':1991},{'김지혜':1993}]

print(list1)
print(tuple1)
print(dictList1)
print('---------')

# list 활용
print('2번:',list1[2])
print('-1번:',list1[-1])
list1[-1] = False
print('변경된 -1번:',list1[-1])
del list1[-1]
print(list1)
print('---------')

# tuple 활용
print('0번:',tuple1[0])
print('-1번:',tuple1[-1])
# Error => tuple1[-1] = False
print('변경되지 못하는 -1번:',tuple1[-1])
# Error => del tuple1[-1]
print(tuple1)

print('---------')

# dictionary 활용
print('딕셔너리리스트: ',dictList1)

## 리스트의 여러개의 딕셔너리 중 키로 값을 찾는 방법
for dict1 in dictList1:
  print('현재 딕셔너리: ',dict1.items())

  for key, value in dict1.items():
    if key == '이건희': 
      print(value)

print('---------')

## 딕셔너리의 여러개의 키-밸류 중 키로 값을 찾는 방법
dict2 = {'이건희':1991, '김지혜':1993}
print('딕셔너리: ', dict2)

for key, value in dict2.items():
  if key == '김지혜':
    print(value);
    
```

```python
# 요소를 저장하고 자료형을 출력해보자
listExam = ['Korea', 'USA', 'Canada']
tupleExam = ('korean','english', 'french')
dictExam = {'KR':'Korea','US':'USA','FR':'korea'}

print('1:',type(listExam), ', 2:',type(tupleExam), ', 3:',type(dictExam))

print()
# 자료형에 맞는 인덱싱 방법으로 특정 요소의 값을 출력해보자
print('리스트의 2번째 요소:', listExam[1])
print('튜플의 1번째 요소:', tupleExam[0])
print('딕셔너리의 FR의 value:',dictExam['FR'])

print()
# 리스트에서 제일 마지막 요소를 'France'로 변경
listExam[-1] = 'France'
print(listExam)

print()
# 튜플의 두번째 요소를 'korean' 변경 =>>>'korean' 튜플은 값 변경이 불가능하다 <<<=
# Error => tupleExam[2]
print(tupleExam)

print()
# 딕셔너리의 key='FR'의 value를 'France'로 변경
dictExam['FR'] = 'France' 
print(dictExam)
```

# 컨테이너 자료형 활용

## List
### `list()` 메서드
- 리스트를 생성하는 메서드
- `range(startNum, stopIdx, step)` 을 활용하여 손쉽게 정수로 이루어진 리스트를 만들 수 있다.
- 문자열을 넣으면 스펠링 하나하나로 생성된다.

```python
# list()함수
listA = ['red','blue','green', 'yellow', 'pink']
listA2 = list([listA[0],listA[2],listA[4]])
listStr = list('안녕하세요')
print(listA2)
print(listStr)

print()
listB = list(range(0,10))       # 0부터 9까지 +1하여 리스트 생성
listC = list(range(0,10+1))     # 0부터 10까지 +1하여 리스트 생성
listD = list(range(0,10,2))     # 0부터 9까지 +2하여 리스트 생성
listE = list(range(0,10+1,2))   # 0부터 10까지 +2하여 리스트 생성
listF = list(range(10,0,-1))    # 10부터 1까지 -1하여 리스트 생성
listG = list(range(10,0-1,-1))  # 10부터 0까지 -1하여 리스트 생성

print('listB:',listB)
print('listC:',listC)
print('listD:',listD)
print('listE:',listE)
print('listF:',listF)
print('listG:',listG)
```

### 슬라이싱
- 슬라이싱을 사용하면 리스트에서 요소의 일부를 선택ㄷ하여 새로운 리스트 형식으로 사용 가능하다.
- 대괄호[]에 선택하고자 하는 요소의 범위를 콜론(:)으로 지정한다.
- `리스트명[fromIdx:toIdx]`

```python
listA_1 = ['red','blue','green', 'yellow', 'pink']
listA_2 = listA_1[1:-1]
listA_3 = listA_1[:-2]
listA_4 = listA_1[3:]
listA_5 = listA_1[2:4]

print(listA_2)
print(listA_3)
print(listA_4)
print(listA_5)
```

### 리스트 연결하기 (`+`)
- 자료형이 같지 않아도 연결이 가능하다.
```python
list1 = [1,2,3]
list2 = [4,5,6]
list3 = list1+list2
print(list1+list2)
"""
출력결과 : 
[1,2,3,4,5,6]
"""
```

```python
a = ['Hello']
b = [1,2,3]
print(a+b)
```

### 리스트 반복하기 (`*`)
- 리스트 반복 연산자(`*`)로 리스트를 반복하여 나열한다.
- `listB = listA * countNum`

```python
listA = [1,2.0,'a']
listB = listA*3
print(listB);
```

### append() : 요소 추가하기
- 리스트 마지막에 요소를 추가한다.
- `리스트명.append(요소)`

### extend() : 리스트 마지막에 여러 개의 요소를 한번에 추가
- 리스트 맨 뒤에 여러 개의 요소를 추가
- `리스트명.extend( [요소1,요소2,...] )`

### insert() : 리스트 특정 인덱스에 요소를 추가
- 특정 인덱스에 요소를 추가하고, 기존 요소는 밀려난다.
- `리스트명.insert(인덱스, 요소)`

### remove() : 특정 요소 삭제
- `리스트명.remove(요소)`

### pop() : 해당 인덱스의 요소를 삭제
- 리스트의 인덱스를 지움
- 인덱스를 입력하지 않으면 마지막 요소가 삭제됨
- `리스트명.pop(idx)`

### sort() : 리스트를 정렬할 때 사용
- `리스트명.sort(reverse=True)` 
- reverse값은 생략 가능하다(내림차순) (default는 false(오름차순)임)

### max() / min() : 최대/최소값 구할 때 사용
- `max(리스트명) / min(리스트명)`

### sum() 정수형 리스트 요소들의 합계를 구할 때
- `sum(리스트명)`

### in / not in : 리스트에 특정 요소가 있는지 확인할 때 `in` 또는 `not in` 연산자를 사용한다.
- 반환값은 boolean 자료형이다.
```python
요소1 in 리스트명
요소2 not in 리스트명
```

### for in : 반복문
- `문자열`, `리스트` 또는 `튜플`의 길이만큼 반복하는 반복문
```python
for 변수 in 리스트명:
  반복코드
```

```python
### append() 요소 추가
list1 = ['kiki']
print('append() 전:',list1)
list1.append(8)
list1.append(True)
print('append() 후:',list1)

print('========')
### extend() 여러 개 요소를 뒤에 추가
list1 = ['kiki']
print('extend() 전:',list1)
list1.extend( [8,True] )
print('extend() 후:',list1)

print('========')
### insert() 요소를 특정 인덱스에 추가
list2 = ['haha','kookoo', 'boom', 'tutu']
print('insert() 전:',list2)
list2.insert(2,True)
list2.insert(2,8)
print('insert() 후:',list2)

print('========')
### remove() 특정 요소를 삭제
list2 = ['haha','kookoo', 'boom', 'tutu']
print('remove() 전:',list2)
list2.remove('kookoo')
print('remove() 후:',list2)

print('========')
### pop() 특정 인덱스의 요소를 삭제
list2 = ['haha','kookoo', 'boom', 'tutu']
print('pop() 전:',list2)
list2.pop(2) #'boom'
print('pop() 후:',list2)

print('========')
### sort() 리스트 요소를 정렬
list3 = [6,4,2,7,22,41,1]
print('sort() 전:',list3)
list3.sort()
print('sort() 후:',list3)

print('========')
### max() / min() 리스트 요소의 최소/최댓값 반환
list3 = [6,4,2,7,22,41,1]
maxVal = max(list3)
minVal = min(list3)
print('최댓값:', maxVal,', 최솟값:',minVal)

print('========')
### sum() 리스트 요소의 합계를 구함
list3 = [6,4,2,7,22,41,1]
sumVal = sum(list3)
print('리스트 합계:',sumVal)

print('========')
### in/not in 특정 요소가 있는지 확인
list3 = [6,4,2,7,22,41,1]
flag1 = 6 in list3
flag2 = 8 in list3
flag3 = 1 not in list3
print(flag1)
print(flag2)
print(flag3)

print('========')
### for in 반복문 : 리스트(또는 튜플, 문자열)의 길이만큼 반복하여 변수에 저장
list2 = ['haha','kookoo', 'boom', 'tutu']
for elem in list2:
  print(elem)

for alph in "hello":
  print(alph)
```
