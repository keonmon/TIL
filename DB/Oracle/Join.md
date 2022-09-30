# DB - Oracle - JOIN문
- Oracle SQL에서 `JOIN`에 대해 복습하고, 정리가 필요한 내용만 기록한다.

---

# 0. 참고내용

## 0.1. 피벗팅 패턴

- 굉장히 **활용성이 큰 패턴**이다.
- ✨알아두면 매우 좋을 것임

```sql
select deptno 
      ,SUM(case job when 'ANALYST'      THEN SAL END) "ANALYST"
      ,SUM(case job when 'CLERK'        THEN SAL END) "CLERK"
      ,SUM(case job when 'MANAGER'      THEN SAL END) "MANAGER"
      ,SUM(case job when 'PRESIDENT'    THEN SAL END) "PRESIDENT"
      ,SUM(case job when 'SALESMAN'     THEN SAL END) "SALESMAN"
      ,SUM(SAL) "TOTAL"
  from emp
group by deptno;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F708f6c31-bb13-4985-8d49-35a9b02bf7e8%2FUntitled.png?table=block&id=a39c2a77-97db-4fb2-b173-24a1e28de71d&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1130&userId=&cache=v2)

---

# 1. JOIN 문

- **서로 연관**되어 있는 **두 개 이상의 테이블을 사용**하여 **데이터를 조회**하는 방법이라고 할 수 있겠다.
- 동시에 둘 이상의 테이블(집합) 결과를 검색

## 1.1. JOIN 사용법

- 조인 구문은 DB 종류마다 상이하기 때문에 어떤것을 사용할 지는 상황에 따라 다르다.

### 1.1.1. ORALCE JOIN :

- 콤마( , )로 테이블을 구분함

```sql
SELECT *
  FROM EMP e, DEPT d
 WHERE e.DEPTNO = d.DEPTNO 
   and e.EMPNO = 7788;
```

### 1.1.2. ANSI JOIN (표준) :

- FROM절에 `JOIN` 이라는 키워드로 명시함
- JOIN 조건은 `ON`에 정의
- `**ON`이 FROM절에 포함**된다고 생각하는게 좋다.

```sql
SELECT *
  FROM EMP e JOIN DEPT d
    ON e.DEPTNO = d.DEPTNO
 WHERE e.EMPNO = 7788;
```

## 1.2. ERD(관계형모델) 에서 테이블의 관계성 파악하기

1. **Oracle SQL Developer**에서
2. **[ 보기 → Data Modeler → 브라우저 ]**를 선택
3. 브라우저 탭이 열리면 [**관계형모델** → **새 관계형 모델**]을 생성
4. 접속탭에서 **연관이 있는 테이블을 모두 선택**하여 **새로 열린 창으로 드래그**한다.
- 위와 같이 진행하면 **테이블 사이에 화살표가 연결**되는데 그것을 **더블클릭** 한다.
- 새로운 창이 열리면, 일반탭 하단에 [**연관된 열**]이라고 있는데, 이곳에서 **두 테이블 사이에 연관되어 있는 컬럼을 확인**할 수 있다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71019e10-babd-4e0b-8aea-ab1fa933265f%2FUntitled.png?table=block&id=148718e2-9cc5-483c-b65a-5ae983d1be8c&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1480&userId=&cache=v2)

- 이렇게 생성된 ERD는 **자동저장이 되지 않는다.**
    - [ **파일 → DataModeler → 저장 ]**  으로 저장한다.

## 1.3. JOIN 활용

### 1.3.1. Equi JOIN :

- 조인 조건에 사용되는 비교연산자 : `=`
- **서로 같은 컬럼, 값을 연결하는 JOIN**
- 

### 1.3.2. Non-Equi JOIN :

- 비교 연산자가 `=` 이외에 다른 연산자를 사용한다.
- **동일 컬럼은 없지만, 연관관계가 있는 테이블**

```sql
SELECT *
  FROM SALGRADE S JOIN EMP E
    ON E.SAL BETWEEN S.LOSAL AND S.HISAL;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F893aca36-5dbb-4d45-90fa-79dc687246f0%2FUntitled.png?table=block&id=55d9007f-5985-470b-85fd-33bbd636385b&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1480&userId=&cache=v2)

### 1.3.3. INNER JOIN :

- 조인 조건에 만족하는 행만 검색

```sql
SELECT *
  FROM EMP E INNER JOIN DEPT D
    ON E.DEPTNO = D.DEPTNO;
```

### 1.3.4. **OUTER JOIN :**

- `INNER JOIN`의 결과 + 어느 한쪽, 또는 양쪽에 **따로 있는 데이터**
- **데이터가 더 많은 테이블의 방향(`LEFT`, `RIGHT`)**을 지정해주면 
그 데이터를 추가적으로 더 보여준다.
- 만일 양 테이블 모두 따로 존재하는 데이터가 있다면?
    - `**FULL` 키워드를 사용한다.**
- ORACLE JOIN은 `**(+)`키워드**를 사용하며, **FULL JOIN은 지원하지 않는다.**

```sql

-- ANSI JOIN

SELECT *
  FROM DEPT D LEFT OUTER JOIN EMP E
    ON E.DEPTNO = D.DEPTNO;

SELECT *
  FROM EMPLOYEES E FULL OUTER JOIN DEPARTMENTS D
    ON E.DEPARTMENT_ID  = D.DEPARTMENT_ID ;

SELECT E.EMPNO, E.ENAME, E.SAL, D.DEPTNO, D.DNAME, D.LOC
  FROM EMP E RIGHT OUTER JOIN DEPT D 
    ON E.DEPTNO = D.DEPTNO 
 WHERE E.SAL    > 3000
    OR E.SAL IS NULL ;

-- ANSI JOIN / 

-- ORACLE JOIN

SELECT *
  FROM EMP E, DEPT D
 WHERE E.DEPTNO(+) = D.DEPTNO;

SELECT E.EMPLOYEE_ID, E.FIRST_NAME, D.DEPARTMENT_ID
     , D.DEPARTMENT_NAME, D.LOCATION_ID
  FROM EMPLOYEES E , DEPARTMENTS D
 WHERE E.DEPARTMENT_ID  = D.DEPARTMENT_ID(+)

-- ORACLE JOIN /
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd38966af-ae19-4e66-a427-b5da43ea6b4e%2FUntitled.png?table=block&id=f25b51ec-3731-4dfb-8b5e-f7e8a842b178&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1480&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06d376d4-2b39-4487-9e87-48017ec0106d%2FUntitled.png?table=block&id=f67cc7c4-b6a0-4cc7-b304-392ff6898216&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1200&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb395f087-a13b-4691-ab75-1ab19cb21020%2FUntitled.png?table=block&id=0be15557-d7bf-40c9-9bb4-46368671701b&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1020&userId=&cache=v2)

- FROM ~ ON까지가  하나의 FROM

## 1.4. 다중 JOIN (3개 이상의 테이블)

- ANSI조인은 JOIN과 ON은 붙어있어야 한다.
- 따라서, 한 쌍의 테이블의 `JOIN - ON`을 마치고, 다음 테이블의 `JOIN - ON`이 이어져야한다.

```sql
SELECT *
  FROM EMP E , DEPT D , SALGRADE S
 WHERE E.DEPTNO = D.DEPTNO 
   AND E.SAL BETWEEN S.LOSAL AND S.HISAL;

SELECT * 
  FROM EMP E JOIN DEPT D 
    ON E.DEPTNO = D.DEPTNO
  JOIN SALGRADE S
    ON E.SAL BETWEEN S.LOSAL AND S.HISAL ;
```

## 1.5. 예제

- **EMP, DEPT 테이블을 이용하여 다음 조건에 만족하는 행을 검색하세요.**
- 검색: empno, ename, sal, deptno, dname, loc
- -  조인: DEPTNO가 같은 행 (근무하는 사원이 없는 부서도 함께 검색)
- 조건: 2000 보다 많은 급여를 받는 사원

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9d93bd2-47db-4129-aca6-54b40e091ecb%2FUntitled.png?table=block&id=1bd4c9b1-1f56-40e0-9167-5da006934e4f&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1220&userId=&cache=v2)

---
