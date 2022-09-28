# Db - Oracle - SELECT절
- Oracle SQL에서 Select Query에 대해 복습하고, 정리가 필요한 내용만 기록한다.

---


# 1. Select query

- 아래 순서로 작성하고, 분석하는것이 좋으며
- 실제로 저렇게 연산된다.

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06b7ad6b-1616-46e4-ade8-fecbbc1364e2%2FUntitled.png?table=block&id=aa334057-3200-42f5-85d7-58a61e228c45&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=2000&userId=&cache=v2)

### 추천하는 분석/작성 순서

`FROM절` → `WHERE절` → `GROUP BY절` → `HAVING절` → `SELECT절` → `ORDER BY절` 

### 필수 명령어

- `SELECT` : 검색 대상 표현식
- `FROM` : 검색 대상 집합

### 옵션 명령어

- `WHERE`
- `GROUP BY`
- `HAVING`
- `ORDER BY`

---

## 1.1. SELECT 절

### 1.1.1. 연결 연산자 - `||`

```sql
select lnid, grade
from tid 
where id_typ = '2';

select lnid || ' 차주의 등급은 ' || grade || ' 입니다. '
from tid
where id_typ = '2' ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62c9499b-6a88-4dff-b1f1-b72141795f19%2FUntitled.png?table=block&id=01c4aa88-f818-43e6-85d8-a0d46c03e34e&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=290&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F407136ec-1188-4a7c-befd-e5a683568933%2FUntitled.png?table=block&id=1797ef87-fce7-436e-87a7-3b0cd3176bec&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=290&userId=&cache=v2)

### 1.1.2. alias

- 컬럼명에 별칭을 주는 것
- `컬럼명 AS “별칭”` 또는 `컬럼명 AS 별칭` 또는 `컬럼명 별칭`

```sql
select lnid as 차주번호,id_typ as 차주구분코드, bthday 생일, gender 성명
  from tid ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62c9499b-6a88-4dff-b1f1-b72141795f19%2FUntitled.png?table=block&id=01c4aa88-f818-43e6-85d8-a0d46c03e34e&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=2000&userId=&cache=v2)

```sql
select lnact, lnact_seq, ln_amt,
       ln_amt/1000 as "대출금(천원)"
from tacct ;
-- 특수문자(_, $, # 이외)가 alias에 있을경우 큰따옴표("")로 묶는다.
-- 첫글자는 문자, 30자 이내
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19899343-d7e4-4cd5-9f99-295459831116%2FUntitled.png?table=block&id=afc70820-8198-405e-a6da-2505f7db0134&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=740&userId=&cache=v2)

### 1.1.3. distinct

- 중복된 **행**을 제거하는 것 (특정컬럼의 데이터 중복제거X)

```sql
select deptno, job
from emp;

select DISTINCT deptno
from emp;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F57d36795-cec5-4f5d-8636-f3cb393accdc%2FUntitled.png?table=block&id=c2670429-2ca5-4547-b79f-c403db8050b1&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=580&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6cc06f7-4432-4473-bef2-5dec935077ec%2FUntitled.png?table=block&id=8cf9b36d-8107-400e-a8f1-70a2673c5a44&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=480&userId=&cache=v2)

---

## 1.2. WHERE절

- **조건식을 정의**하는 것
- **문자, 날짜 는 작은따옴표(’ ’)로 감싼다.**
- 숫자는 그냥 적음

### 1.2.1. between

```sql
select *
  from emp
 where sal >= 2000 and sal <= 3000;

select *
  from emp
 where sal between 2000 and 3000;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F10c8b225-7eb7-4e19-af05-5ca793be1389%2FUntitled.png?table=block&id=18b95ae6-1f14-4408-9b55-289bd15ca884&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1150&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8f525459-90e5-4877-906c-e6b01b017a42%2FUntitled.png?table=block&id=6c204f4a-cca1-4f79-80ed-b33f8800db14&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1220&userId=&cache=v2)

- 주의사항 : **앞의 값**이 **뒤의 값**보다 **클 수 없다.**

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd343c44c-02ab-466a-92b0-3e9511eb8882%2FUntitled.png?table=block&id=b51e2986-7ad3-4348-be17-dbe7d012cef7&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=960&userId=&cache=v2)

### 1.2.2. IN

- **하나의 컬럼에서 다중 데이터의 조건을 설정-검색**

```sql
select *
  from emp
 where DEPTNO = 10 OR DEPTNO = 20 ;

select *
  from emp
 where DEPTNO IN(10,20) ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa7ca97a-67b0-49c9-a7bd-d30a3e74aa51%2FUntitled.png?table=block&id=86bf5bb4-23fb-4ce5-b1cb-15f77a391658&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1150&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0a3d681-c189-4c0f-8cb5-5e7f5e59705e%2FUntitled.png?table=block&id=3b8af35b-55f6-4f9a-9aba-f0617746b558&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1230&userId=&cache=v2)

### 1.2.3. LIKE

```sql
select *  
  from emp
 where ENAME LIKE '%S%';

select *  
  from emp
 where ENAME LIKE 'S____';
-- _가 4개라서 S로 시작하고 뒤에 4글자가 오는 ENAME 조회
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F97910112-668a-4c0c-ab84-fa35614fb6f4%2FUntitled.png?table=block&id=c046ba56-6f19-4714-a90e-93a443a64cd8&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=420&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9b161d64-ecb8-45e2-a4e4-6ab11f71cb0d%2FUntitled.png?table=block&id=2b0b7ca3-a5fb-4dce-9455-417fceb7f422&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=220&userId=&cache=v2)

### 1.2.4. IS NULL

- NULL값인 행을 구하고 싶다면 `IS NULL` 로 조회해야 한다.

```sql
select *  
  from emp
 where comm = null; -- 조회결과 X

select *  
  from emp
 where comm is null;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2cfb1aa-51f0-43ec-9efd-7bbf92628ead%2FUntitled.png?table=block&id=7fe1440b-3840-4d73-8e4d-ce6c522822a0&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=420&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb974df4b-c39e-4c61-8944-388ef654ac4f%2FUntitled.png?table=block&id=25821764-bfad-4c28-8147-0c95abb80246&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=360&userId=&cache=v2)

### 1.2.4. AND OR연산의 우선순위

- `AND`가 `OR`보다 **우선**이다.
- `AND`보다 `( )괄호`가 더 **우선**이다.
- `AND` 보다 `NOT`이 더 **우선**이다.
