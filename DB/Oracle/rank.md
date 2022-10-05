# DB - Oracle - 순위함수
- 순위함수에 대해 복습하고 정리한다.

---

## 0.2. RANK(), DENSE_RANK(), ROW_NUMBER()

- 반드시 `OVER()`을 사용해 **정렬을 먼저** 시킨다.
- `RANK()`, `DENSE_RANK()`는 **값이 같은 것에 공통된 행번호**를 매겨준다.
    - **값이 같은 것에 같은 등급**을 매긴다고 생각 가능.
- `RANK()`는 **중복된 등급의 다음 등급**은 **중복된 것을 더하여 등급이 지정**된다.
- `PARTITION BY DEPTNO ORDER BY SAL DESC`는 **DEPTNO로 묶어**서 그것마다 **각각의 RANK**를 매긴다.

```sql
SELECT empno, ename, sal, deptno, 
       RANK()       OVER(ORDER BY SAL DESC) AS RK,
       DENSE_RANK() OVER(ORDER BY SAL DESC) AS DRK,
       ROW_NUMBER() OVER(ORDER BY SAL DESC) AS RNUM 
  FROM emp ;

-----
-- PARTITION BY도 활용
SELECT empno, ename, sal, deptno, 
       RANK()       OVER(PARTITION BY DEPTNO ORDER BY SAL DESC) AS RK,
       DENSE_RANK() OVER(PARTITION BY DEPTNO ORDER BY SAL DESC) AS DRK,
       ROW_NUMBER() OVER(PARTITION BY DEPTNO ORDER BY SAL DESC) AS RNUM
  FROM emp ;
```

![- OVER(ORDER BY SAL DESC)](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3dd4426-8557-4c96-9f09-b7aa651ecfe0%2FUntitled.png?table=block&id=4fffcc4e-de61-46e5-a0e0-2b7525560d70&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=820&userId=&cache=v2)

- OVER(ORDER BY SAL DESC)

![- OVER(PARTITION BY DEPTNO ORDER BY SAL DESC)](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb3917eaa-b8f6-4441-bf03-05010c83d715%2FUntitled.png?table=block&id=4ee65c36-5690-47ba-ba0f-6facd0452009&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=830&userId=&cache=v2)

- OVER(PARTITION BY DEPTNO ORDER BY SAL DESC)
