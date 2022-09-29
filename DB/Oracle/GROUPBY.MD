# DB - ORACLE - GROUP BY절
- Oracle SQL에서 GROUP BY절에 대해 복습하고, 정리가 필요한 내용만 기록한다.
- `GROUP BY`, `GROUP함수`, `HAVING절`

---

# 4. GROUP 함수 & GROUP BY 절

## 4.1. GROUP 함수

- **행을 이용**하여 통계정보를 **계산**하는 함수
- 기본적으로 NULL을 제외하고 계산한다.
    - `AVG( )`도 데이터가 들어있는 행의 개수로 계산됨에 주의하자
    - `AVG( NVL(컬럼명, 0) )`로 하면 실제(NULL을 포함한) 모든 행의 개수로 계산함.

```sql
SELECT SUM(SAL), AVG(SAL), MAX(SAL), MIN(SAL), COUNT(SAL)
  FROM EMP;
```

- 테이블에서 급여의 **합계**, 급여의 **평균**, **최대급여**, **최소급여**, 급여의 **개수**를 보여준다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5668182c-8a41-465a-a721-0523a88d50dd%2FUntitled.png?table=block&id=3dad110d-f5c4-4f29-ade2-84de8fc6014c&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1570&userId=&cache=v2)

## 4.2. GROUP BY 절

- **동일한 값**끼리 묶어서 **그룹을 형성하기 위한 표현식**
- 일반적으로 `HAVING절`과 함께 쓰인다.
- **장바구니에 필요한 물건을 한 번에 담아** 가져오는걸 생각하면 이해하기 쉬움
- GROUP함수를 쓰지않고는 웬만해서는 사용되지 않음!

**Q .  EMP 테이블에서 부서별 급여 합계를 검색한다면?**

```sql
SELECT DEPTNO, SUM(SAL)
  FROM EMP 
 GROUP BY DEPTNO ; -- 각 그룹별 SUM(SAL)이 나온다. 
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fddabe579-f27c-4a6d-a1f9-cecb44f7e4ed%2FUntitled.png?table=block&id=7290d4db-9e63-4c4c-934a-35637d6898c3&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=440&userId=&cache=v2)

### 4.2.1. GROUP BY절의 활용

### 4.2.2. 주의점

- **GROUP BY절**을 작성한다면, 반드시 **하나의 그룹**은 **하나의 결과**만 나와야 한다.

```sql
-- 아래 내용은 에러가 발생한다.(그룹당 하나의 행이 나와야만 하기 때문)
SELECT DEPTNO, JOB
  FROM EMP
 GROUP BY DEPTNO;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F881a662a-5594-445f-8dcf-df19427059ea%2FUntitled.png?table=block&id=17211efb-b6b3-4cfc-871b-ff5745b267b1&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=580&userId=&cache=v2)

- 컬럼당 행의 개수가 일치하지 않는다면 에러가 발생한다.
- 아래는 **DEPTNO컬럼**(14행)과 **SUM(SAL)**(1행)은 **행의 개수가 다르기 때문**.

```sql
-- 아래 내용은 에러가 발생한다.(각 컬럼의 행의 개수가 다르기 때문)
SELECT DEPTNO, SUM(SAL)
  FROM EMP;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2c74234-7578-4234-aa93-7f053d806e04%2FUntitled.png?table=block&id=931203b4-602f-4c75-a0b1-a8858f3df26c&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=690&userId=&cache=v2)

## 4.3. HAVING절

- WHERE절에는 GROUP함수의 사용이 불가능하다.
- 따라서 **HAVING절에서 그룹절의 조건을 정할 수 있다.**

<aside>
📅

- WHERE 절은 그룹을 제한하는 데 사용할 수 없다.
- 그룹을 제한하려면 HAVING 절을 사용한다.
- WHERE 절에서 그룹 함수를 사용할 수 없다.
</aside>

```sql
-- WHERE절에서는 그룹함수가 허용되지 않는다.
SELECT DEPTNO, SUM(SAL)
  FROM EMP
 WHERE SUM(SAL) > 9000
 GROUP BY DEPTNO;
 
-- 따라서 HAVING절에 그룹함수를 사용한다. (그룹절의 조건을 주기 위해)
SELECT DEPTNO, SUM(SAL)
  FROM EMP
 GROUP BY DEPTNO
 HAVING SUM(SAL) > 9000;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdfa45c20-35cf-4f9b-90c8-e1497b2c35b0%2FUntitled.png?table=block&id=58a5bb23-8781-4c4a-8a46-ed8778ec83c6&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=640&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa6238d74-8f8f-4202-b147-479cd5ba5e5a%2FUntitled.png?table=block&id=1eafe0a7-7bc1-4d8e-a549-1109489fcc9f&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=610&userId=&cache=v2)
