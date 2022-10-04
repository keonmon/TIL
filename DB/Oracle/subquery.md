# DB - Oracle - subquery 서브쿼리

- Oracle SQL에서 `Subquery`에 대해 복습하고, 정리가 필요한 내용만 기록한다.

---

# 1. Subquery ✨서브쿼리✨

---

- 굉장히 굉장히 굉장히 굉장히 굉장히 **중요한내용!!!!!!!!!!**

## 1.1. Subquery 개요

- **SQL 명령문에 포함된 SELECT 명령문**
- **MAIN QUERY보다 먼저 실행**될 수 있고, 
실행 결과는 SUBQUERY위치로 리턴, 
**MAIN QUERY에서 그 결과를 사용**한다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff444a566-cee6-486a-8d1d-fa6f3590fb5a%2FUntitled.png?table=block&id=9348836a-14b9-4f38-a5fd-5e71c60aedd7&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1960&userId=&cache=v2)

```sql
-- Q. 사원번호7566 보다 더 많은 급여를 받는 사원 LIST
SELECT * 
  FROM EMP 
 WHERE EMPNO = 7566 ; -- 7566의 SAL -> 2975

SELECT * 
  FROM EMP 
 WHERE SAL > 2975 ;

-- SUBQUERY를 쓰면?
SELECT * 
  FROM EMP
 WHERE SAL > (SELECT SAL 
                FROM EMP 
               WHERE EMPNO = 7566) ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11b2ce36-ca3c-4b2b-9e19-b405b35649d8%2FUntitled.png?table=block&id=95ecb5c9-cbbc-4ab4-9705-735df5f9b0f3&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1210&userId=&cache=v2)

## 1.2. SUBQUERY의 사용 방법

- `**GROUP BY절`을 제외한 모든 절**에 **서브쿼리 사용 가능**하다.
- 리턴되는 위치(사용되는 위치)에 따라 서브쿼리의 쓰임새가 달라진다.

```sql
-- SELECT절에 SUBQUERY
SELECT (SELECT ...)
  FROM ...

-- FROM절에 SUBQUERY
SELECT * 
  FROM (SELECT ...)

-- HAVING절에 SUBQUERY
SELECT ...
  FROM ...
 GROUP BY ...
HAVING (SELECT ...) 

-- WHERE절에 SUBQUERY
SELECT ...
  FROM ...
 WHERE (SELECT ...) 

-- ORDER BY절에 SUBQUERY
SELECT ...
  FROM ...
 ORDER BY (SELECT ...)
```

### 1.2.1. 조건절(WHERE, HAVING)의 서브쿼리

- 리턴하는 행, 컬럼 개수에 따라 사용가능한 비교연산자에 주의한다.
- order by절 비허용

<aside>
  
💡 **Single row subquery**
- 하나의 행, 하나의 컬럼.
- 즉, **단일 값을 리턴**하는 **서브쿼리**.
- **단일행 비교 연산자**( =, <>, >, ≥, <, ≤ )를 사용

</aside>

```sql
SELECT * 
  FROM EMP
 WHERE SAL > (SELECT SAL 
                FROM EMP 
               WHERE EMPNO = 7566) ;

-- WHERE SAL > 2975 과 같음.
```

<aside>
  
💡 **Multiple row subquery**
- **둘 이상의 행을 리턴**하는 **서브쿼리**
- **다중행 비교연산자( IN,** ANY, ALL**)를 사용**

</aside>

- `IN` 연산자가 대표적으로 많이 사용됨
    - **단일행 리턴이어도 사용 가능**하기 때문
    - ~~ANY, ALL 연산자는 실무에서 거의 쓰일일이 없음..~~

```sql
SELECT * 
  FROM EMP
 WHERE SAL IN (SELECT MIN(SAL) 
                FROM EMP 
               GROUP BY DEPTNO) ;

-- WHERE SAL IN (800, 950, 1300) 과 같음
```

- **ANY**는 OR연산이며, **ALL**은 AND연산임.

```sql
-- ANY 연산자 활용 -----------
SELECT * 
  FROM EMP 
 WHERE SAL >ANY (SELECT AVG(SAL)
                   FROM EMP 
                  GROUP BY DEPTNO) ;
-- SELECT * 
--   FROM EMP 
--  WHERE SAL > 1566
--     OR SAL > 2175
--     OR SAL > 2916 ;  과 같음

-- ALL 연산자 활용 -----------
SELECT * 
  FROM EMP 
 WHERE SAL >ALL (SELECT AVG(SAL)
                   FROM EMP 
                  GROUP BY DEPTNO) ;
-- SELECT * 
--   FROM EMP 
--  WHERE SAL > 1566
--    AND SAL > 2175
--    AND SAL > 2916 ;  과 같음
```

![`>ANY` 연산 결과](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca347fc0-1e88-42e9-bf53-884cb27b4233%2FUntitled.png?table=block&id=f9a825f0-656e-4840-943c-9ab94f7ece1a&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1240&userId=&cache=v2)

`>ANY` 연산 결과

![`>ALL` 연산 결과](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Facb4fa63-f122-4db5-b789-7a2a79d6a413%2FUntitled.png?table=block&id=9652a8cb-4e46-4a02-aa7d-3f34588f82e3&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1220&userId=&cache=v2)

`>ALL` 연산 결과

<aside>
  
💡 **Multiple column subquery**
- **둘 이상의 컬럼을 리턴**하는 **서브쿼리**
-  **IN만 사용 가능**

</aside>

```sql
-- Q. 각 부서의 최소급여를 받는 사원 List

SELECT * 
  FROM EMP 
 WHERE (DEPTNO, SAL) IN (SELECT DEPTNO, MIN(SAL)
                           FROM EMP 
                          GROUP BY DEPTNO) ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6e030928-03ed-4cff-b118-52e68bd1da3c%2FUntitled.png?table=block&id=2192079d-fc30-467d-8b76-59439f708ee0&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1310&userId=&cache=v2)

<aside>
  
💡 **Correlated subquery**
- **Mainquery 컬럼을 참조**하는 **서브쿼리**
-  **Mainquery가** Subquery보다 **먼저 실행**된다.
**- 후보행**이 결정되면 **후보값을 subquery에 입력**하여 **반복실행**하여 결과를 도출해낸다.

</aside>

- 온라인성 업무에 최적화된 패턴 ( OLTP )
    - ex. 게시판 페이징
- 각 부서별로 부서의 평균급여보다 높은 사원을 조회한다.

```sql
SELECT *
  FROM emp e
 WHERE sal > (SELECT AVG(SAL)
                FROM emp 
               WHERE deptno = e.deptno) ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1fc510b9-99e1-4273-8338-0cea1619c190%2FUntitled.png?table=block&id=a3bec498-a2a1-467a-9c58-042b9da90e27&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1200&userId=&cache=v2)

### 1.2.2. FROM절의 서브쿼리

- Inline View
- **Correlated subquery 사용 불가능**
- 조건절의 서브쿼리에서 다중컬럼을 사용하기에는 IN 연산자밖에 없기 때문에 활용도가 떨어지게 된다.
- 따라서, **다중컬럼을 리턴하는 서브쿼리는 FROM 절에서 사용하는 것이 유용**할 수 있다.
- order by 절 사용 가능하다. (**Top-N 쿼리(질의)** 가능)

```sql
-- Q. 소속 부서의 평균 급여보다 많은 급여를 받는 사원 LIST

-- 조건절에서는...?
SELECT * 
  FROM EMP
 WHERE (DEPTNO,SAL) ??? (SELECT DEPTNO, AVG(SAL)
                           FROM EMP
                          GROUP BY DEPTNO );
-- IN연산자만 가능하므로 조회 불가능한데..

--------------------------------------
-- FROM절에서 SUBQUERY를 사용해보자!!
-- ORACLE 조인
SELECT E.*
  FROM EMP E, (SELECT DEPTNO, AVG(SAL) AS AVG_SAL
                 FROM EMP
                GROUP BY DEPTNO) A
 WHERE E.DEPTNO = A.DEPTNO
   AND E.SAL > A.AVG_SAL;

-- -- ANSI 조인
SELECT E.*
  FROM EMP E JOIN (SELECT DEPTNO, AVG(SAL) AS AVG_SAL
                     FROM EMP
                    GROUP BY DEPTNO) A
    ON E.DEPTNO = A.DEPTNO
   AND E.SAL > A.AVG_SAL;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F893ec059-1e23-475e-afd3-562818aebf8f%2FUntitled.png?table=block&id=d8972e61-0c2b-44de-9aa2-a962ba9a8ffc&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1210&userId=&cache=v2)

### 1.2.3. SELECT, ORDER BY절의 서브쿼리

- **Scalar Subquery**만 가능하다. (단일 값을 리턴하는 서브쿼리)

```sql
SELECT *
  FROM ( select *
           from EMP e
          order by sal desc)
  where rownum <= 3 ;

-----

SELECT D.*, (SELECT SUM(SAL) 
               FROM EMP
              WHERE DEPTNO = D.DEPTNO) AS "SUM_SAL"
  FROM DEPT D;

-----

SELECT *
  FROM TID A
 ORDER BY (SELECT CODE
             FROM TCODE
            WHERE GRADE = A.GRADE);
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbcd29573-c015-40c3-b202-e1a9612b66e8%2FUntitled.png?table=block&id=915edfc4-4744-4603-8231-88c6ae1042f2&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1290&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff386cca4-696f-419e-a010-f6d4a58962a1%2FUntitled.png?table=block&id=28ac2419-64f7-4904-b61e-06c07c47c313&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=750&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbaaab89c-bfba-4e36-b222-f9b761f7b340%2FUntitled.png?table=block&id=f195eb71-4b97-4dd4-84c3-45e912cb4dda&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=930&userId=&cache=v2)
