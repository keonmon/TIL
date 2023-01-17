# Comprehension
- `List` 또는 `Dictionary` 자료형을 만드는데, 원하는 요소들을 간편하게 가져와 쉽게 구성할 수 있따..

## 1. List comprehension
### 1.1 방법 1 - `[ ... for i in range() ]  `
- for문으로 list를 구성하는 코드를 한줄로
```python
areas1 = [i*i for i in range(1,11)]
print(areas1) # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### 1.2 방법 2 - ` [ ... for i in range() if 조건식 ] `
- for문 + 조건식으로 리스트를 구성하는 코드를 한줄로 작성함
```python
areas2 = [i*i for i in range(1,11) if i%2==0 ]
print(areas2) # [4, 16, 36, 64, 100] (2의 배수만 제곱)
```

### 1.3 방법 3 - ` [ (i,j) for i in range(Number) for j in range(Number) ] `
- 이중 for문을 한줄로 작성하여 리스트를 구성하는 코드를 한줄로 작성할 수 있따.
```python
areas3 = [ ( x, y ) for x in range(3) for y in range(3) ]
print(areas3) #[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

## 2. Dictionary comprehension
### 2.1. 방법 1 - `enumerate(list1)`
- 하나의 리스트에서 {index : element} 인 dict를 구성함
```python
list1 = ['a','b','c'] 
comp_dict = {index+1 : element for index, element in enumerate(list1)}
print(comp_dict) # {1:'a', 2:'b', 3:'c'}
```


### 2.2. 방법 2 - `zip(list1, list2)`
- `zip()`을 활용하여 두개의 List를 순회하여 같은 index인 요소로 dict를 구성함
```python
students = ['가','나','다','라','마','바']
scores = [84,21,13,84,95,95]
score_dict = {student : score for student, score in zip(students, scores)}
print(score_dict) # {'가': 84, '나': 21, '다': 13, '라': 84, '마': 95, '바': 95}
```

