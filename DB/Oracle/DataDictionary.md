# Oracle - `DataDictionary(데이터 딕셔너리, DD)`
* 사용자(user)가 소유하고 있는 테이블을 살펴보기 위해 다음과 같은 명령어를 입력한다.
```sql
SELECT * FROM TAB;
```
|**TNAME**|**TABTYPE**|**CLUSTERID**|
|---|---|---|
|TABLE1|TABLE|NULL|
|...|...|...|
* TAB은 TABLE의 약자로 USER가 소유하고 있는 테이블의 정보를 알려주는 `데이터 딕셔너리`이다.
