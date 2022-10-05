# DB - Oracle - JOIN과 subquery의 사용 비교
- JOIN과 subquery의 사용시 주의점과 사용시 비교를 학습하고 정리한다.

---

## 1. JOIN과 서브쿼리의 사용 시기

- `JOIN`은 둘 중 하나의 테이블에서 중복된 데이터가 나타날 수 밖에 없다.
    - **불필요한 데이터가 나타날 가능성이 크다**는 의미. (특히 1의 집합 쪽에서)
- 반면, `서브쿼리`를 활용하게되면 더미데이터가 발생할 일이 대폭 줄어든다.
- **SELECT절에 올라가는 데이터를 갖는 테이블만 FROM절에 올리는 습관**을 들이는 게 좋다.

```sql
-- 조인
SELECT D.*
  FROM EMP E, DEPT D 
 WHERE E.DEPTNO = D.DEPTNO ;

-- 서브쿼리
SELECT *
  FROM DEPT 
 WHERE DEPTNO IN (SELECT DEPTNO 
                    FROM EMP) ; 
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ba2a18f-b810-420e-98a1-ea5fadc59c9a%2FUntitled.png?table=block&id=9a30236c-1e98-4de9-af91-1b19f3915f12&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=590&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe75fd5e3-cc78-440c-9640-54b09d4c3b0d%2FUntitled.png?table=block&id=e6587761-424a-4a37-846d-f1d389c98407&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=570&userId=&cache=v2)

## 2. 다대다 (M:M) JOIN을 피하라!

- JOIN 시 테이블 사이의 공통 데이터가 `다대일 구조`일 때 JOIN을 하는 것이 바람직하다.
- 만일 **`다대다 JOIN`**을 하게 된다면 **더미(불필요)데이터가 생성**되므로 그것을 **제거하는 작업이 추가적으로 발생**하기도 하고, 신**뢰할 수 없는 데이터가 남을 가능성**이 크다!
- 따라서 서브쿼리 내부에서 앞서 GROUP BY절(그룹핑)을 하여, 메인쿼리에서 M:M 조인이 일어나지 않도록 미연에 방지하는 것이 중요하다.
