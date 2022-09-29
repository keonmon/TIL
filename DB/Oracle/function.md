# DB - Oracle - 함수 (단일행 함수)
- Oracle SQL에서 단일행함수에 대해 복습하고, 정리가 필요한 내용만 기록한다.

---

# 2. 단일행 함수의 활용

## 2.1. 문자함수

### 2.1.1. 문자열의 대소문자를 변환하는 함수

```sql
select last_name, upper(last_name), lower(last_name), job_id, initcap(job_id)
  from employees;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4250cad6-9c68-4c33-82a5-025d1df4556a%2FUntitled.png?table=block&id=533b374c-b31b-43c2-8d58-939bc6e20c7b&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1260&userId=&cache=v2)

- `upper('문자열')`
    - 대문자로
- `lower('문자열')`
    - 소문자로
- `initcap('문자열')`
    - 첫자를 대문자로, 단어가 구분되어있다면 그 단어마다 첫자를 대문자로

### 2.1.2. 문자열을 조작하는 함수

```sql
select job_id, substr(job_id, 4, 3)
             , substr(job_id, 4)
             , substr(job_id, -2, 2)
  from employees;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F23f69b19-eb6c-470d-9619-0b473e7cc7b0%2FUntitled.png?table=block&id=185e025f-0af5-492c-8577-21815d650b92&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1070&userId=&cache=v2)

- `substr(’문자열’, 시작위치값, 끝위치값)`
    - 문자열의 시작위치값에서 끝위치값의 문자열을 반환
- `length(’문자열’)`
    - 문자열의 길이를 반환
- `instr(’문자열’, ‘문자’)`
    - 문자열에서 해당 문자의 위치값을 반환
    

## 2.2. 숫자 함수

### 2.2.1. 실수 함수

```sql
select 45.926, round(45.926,2), round(45.926,0), round(45.926, -1)
from dual;

select 45.926, trunc(45.926,2), trunc(45.926,0), trunc(45.926, -1)
from dual;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42f916ba-0e79-474f-96f5-113980a392a9%2FUntitled.png?table=block&id=6d57c680-f10a-4499-8183-f1401cfce644&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=900&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8837f7e7-efbe-4821-ad65-f1ab9d42c713%2FUntitled.png?table=block&id=411c64de-6645-4241-9a46-bbff12583dba&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=900&userId=&cache=v2)

- `round(실수, 소수점 자릿수)`
    - 지정된 소수점 자릿수로 값을 반올림
- `trunc(실수, 소수점 자릿수)`
    - 지정된 소수점 자릿수로 값을 truncate(절삭)

## 2.3. 날짜 조작 함수

- `MONTHS_BETWEEN(’날짜1’, ‘날짜2’)`
    - 두 날짜 간의 **월 수**

```sql
select sysdate hire_date, trunc(months_between(sysdate, hire_date)) 
  from employees;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e43e41a-c12b-4b97-8bdc-ab0c3dd22a57%2FUntitled.png?table=block&id=6f1aac7d-ee9d-46aa-be9e-f29aa0838009&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=770&userId=&cache=v2)

- `ADD_MONTHS(’날짜1’, 정수)`
    - 날짜에 **월을 정수만큼 증감**
    - `ADD_MONTH(’2004/01/31’, 1)` ⇒ **‘2004/02/29’** (2월의 **말일**을 반환)

```sql
select add_months(sysdate,3), add_months(sysdate+1,3)
  from dual;
```

![***작성일 : 2022/09/29***](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a58c915-81ef-4630-be17-68841c0a160c%2FUntitled.png?table=block&id=fcf25e3b-daf5-47b8-9cb0-22ac193e168d&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=860&userId=&cache=v2)

***작성일 : 2022/09/29***

- `LAST_DAY(’날짜’)`
    - 해당월의 **마지막 날**을 반환
    

### 2.3.1.  `TO_CHAR` 함수의 활용

`TO_CHAR('날짜', 'format_model')`

- 형식모델 :
    - **작은따옴표**로 묶는다.
    - **대소문자를 구분**한다
    - 유효한 **날짜 형식 요소**를 포함할 수 있다.
    - 쉼표로 날짜 값과 구분한다.

<aside>
📅 **<형식모델 요소>**

- **YYYY**      : 숫자로 된 **전체 연도**
- **YEAR**      : 영어 철자로 표기된 **연도**
- **MM**        : **월**의 2자리 값
- **MONTH** : 전체 **월** 이름
- **MON**      : **월**의 3자 약어
- **DY**          : **요일**의 3자 약어
- **DAY**        : **요일**의 전체 이름
- **DD**          : 숫자 형식의 **일**
</aside>

```sql
SELECT SYSDATE                 -- 2022/09/29
      ,TO_CHAR(SYSDATE,'YYYY') -- 2022
      ,TO_CHAR(SYSDATE,'MM')   -- 09
      ,TO_CHAR(SYSDATE,'DD')   -- 29
  FROM DUAL;
```

- `sysdate` :
    - DB가 위치한 곳의 시간
- `current_date` :
    - 로컬세션이 위치한 곳의 시간
    
- `‘날짜’ - ’날짜’` :
    - 일수를 반환한다. (**빼기만 가능**하다. gap을 알기 위해)

```sql
-- 날짜-날짜 -> 일수를 반환
select last_name, hire_date, trunc(sysdate - hire_date) 
  from employees;
```

## 2.4. TO_CHAR()함수의 다른 사용법 (숫자)

- $ : 달러화
- L : 환경설정에 설정된 통화
- 9와 0의 비교 : **0을 채우며 변환**된다.

```sql
SELECT LN_AMT
      ,TO_CHAR(LN_AMT,'$999,999,999,999.99')
      ,TO_CHAR(LN_AMT,'L000,000,000,000.00')
  FROM TACCT ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5ed13931-e3b3-4218-8ffb-fad7193be461%2FUntitled.png?table=block&id=663b94b3-6e61-465d-8314-44b350060844&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1370&userId=&cache=v2)

## 2.5. TO_NUMBER()

- **문자(0~9) → 숫자로 변환**

```sql
SELECT TO_NUMBER('$1,500','$999,999') + TO_NUMBER('$2,000','$999,999')
  FROM DUAL;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24f9cc2e-ef9e-4100-a983-608076a2b7a3%2FUntitled.png?table=block&id=21dfb3bc-dc84-47bb-a489-396c9511da30&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=770&userId=&cache=v2)

## 2.6. TO_DATE()

- **문자(날짜형식) → 날짜**
    - ‘A’ → DATE (X), 123 → DATE (X)

```sql
-- 아래 '2022/09/29' 는 그저 문자열일 뿐!!!
SELECT '2022/09/29'
  FROM DUAL;

-- 아래는 날짜형식으로 형변환되어서 +1(+1일)이 가능하다.
SELECT '2022/09/29'
      ,TO_DATE('2022/09/29','YYYY/MM/DD') + 1
  FROM DUAL;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbbef5c65-df43-41cb-8fc0-091b70333411%2FUntitled.png?table=block&id=c503f0c1-1b5a-45fa-8989-a6445fb8331e&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=270&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72b8320c-21af-4118-b5cf-deec3e522489%2FUntitled.png?table=block&id=6c378000-fcd8-4d1d-9c1d-a2101333b7a2&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=820&userId=&cache=v2)

## 2.7. NVL 일반함수

- **NULL Value Logic**의 약어
- 말 그대로 **NULL을 어떻게 처리할지 결정하는 함수**

```sql
SELECT EMPNO, ENAME, SAL, COMM, SAL + COMM
  FROM EMP ;

SELECT EMPNO, ENAME, SAL, COMM, SAL + NVL(COMM, 0)
  FROM EMP ;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1b13aef7-7a81-4078-9e62-b7d959b2cb07%2FUntitled.png?table=block&id=e1e33c1f-ee82-414c-a59a-be74cc8f29b5&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=760&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93e27ab4-fd6f-4172-afd2-b8465b24b02c%2FUntitled.png?table=block&id=49dd3536-0243-47dd-b008-d0d3e49d9635&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=860&userId=&cache=v2)
