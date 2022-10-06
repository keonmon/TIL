# DB - Oracle - 집합 연산자
- Oracle SQL에서 `집합 연산자`에 대해 복습하고, 정리가 필요한 내용만 기록한다.


---

# 1. 집합 연산자

- `UNION` `UNION ALL` `INTERSECT` `MINUS`

## 1.1. UNION - 합집합

- 합집합

```sql
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (10,30)
UNION                  -- UNION 연산자 추가
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (20,30);
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F31764f46-c833-4b13-a8ca-3b9d8a1e7fda%2FUntitled.png?table=block&id=4ea69021-111d-4b9c-9494-1dbc4a353985&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1210&userId=&cache=v2)

## 1.2. UNION ALL - 합집합 
(중복데이터 제거 X)

- 집합 연산자 중 **유일하게 중복제거를 안하는 연산자**
    - 나머지 `UNION`, `INTERSECT`, `MINUS`는 **중복을 제거**한다.

```sql
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (10,30)
UNION ALL                 -- UNION ALL 연산자 추가
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (20,30);
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F017cb737-1620-4ea8-93b1-4e906db49ac3%2FUntitled.png?table=block&id=842d1655-7403-4adc-9142-27fa13366db1&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1210&userId=&cache=v2)

## 1.3. INTERSECT - 교집합

- 교집합

```sql
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (10,30)
INTERSECT              -- INTERSECT 연산자 추가
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (20,30);
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1311e32a-f8a3-4141-8bea-842f6faf2aaf%2FUntitled.png?table=block&id=bbc94382-b1d7-45a8-ba74-b1e1965c50ef&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1150&userId=&cache=v2)

## 1.4. MINUS - 차집합

- **앞 집합**에서 **뒤 집합**과 **공통되는 부분을 제거**한 후, **** 
**앞 집합에서 나머지**를 보여준다.
- 앞의 집합에 따라 결과가 달라진다.

```sql
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (10,30)
MINUS                 -- MINUS 연산자 추가
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (20,30);

-- 집합의 **순서**를 **변경**
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (20,30)
MINUS                 -- MINUS 연산자 추가
SELECT * 
  FROM EMP
 WHERE DEPTNO IN (10,30);
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4a3d66a-a121-42a4-991f-9b4c4ff896f2%2FUntitled.png?table=block&id=94b864c1-f3a4-42d8-b8b3-132bb619c9b7&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1240&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe0143edf-a3b2-4ab8-8ae2-a029bb50068c%2FUntitled.png?table=block&id=bd3e2d51-c92b-4a7b-8369-7530f5e43ba6&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1120&userId=&cache=v2)

## 1.5. ⚠️ 집합연산자 사용시 주의점 ⚠️

- 두 집합의 SELECT 컬럼의 **개수**, 데이터 **타입**이 반드시 **일치**해야 한다.
- **ORDER BY절**은 문장 **가장 마지막에 한 번만 위치**해야만 한다.
    - **SELECT절에 있는 컬럼명**만 사용 가능 ( `*` 일 경우 에러 )
    - 집합연산자를 사용시 정렬할 때, **컬럼 순서**를 사용하는 것을 **권장**
    

## 1.6. 활용

- `UNION ALL`이 가장 많이 사용된다.
    - **두 테이블을 같이보고자 할 때!**

```sql
-- 대표적인 활용 예제
-- '각 부서의 직무별 급여합계'와 '부서별 급여합계'를 같이보고자 할 때
SELECT DEPTNO, JOB, SUM(SAL) 
  FROM EMP 
 GROUP BY DEPTNO, JOB 
UNION ALL                      -- **UNION ALL** 사용
SELECT DEPTNO, NULL, SUM(SAL)  -- 컬럼 수를 맞추기 위해 **NULL** 사용
  FROM EMP 
 GROUP BY DEPTNO 
 ORDER BY 1, 2;

-- ROLLUP ( 처리량이 많다면 비교적 성능이 떨어질 때가 있다고 함 )
SELECT DEPTNO, JOB, SUM(SAL) 
  FROM EMP 
 GROUP BY ROLLUP(DEPTNO, JOB) 
ORDER BY 1,2 ;
```
