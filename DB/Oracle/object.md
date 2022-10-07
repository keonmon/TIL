# DB - Oracle - 객체
- Oracle의 객체에 대해 복습하고 정리한다.

---

# 1. 객체 관리

| 객체 | 설명 |
| --- | --- |
| 테이블 | 기본 저장단위이며 행으로 구성되어 있다. |
| 뷰 | 하나 이상의 테이블에 있는 데이터의 부분 집합을 논리적으로 나타낸다 |
| 시퀀스 | 숫자 값을 생성 |
| 색인(INDEX) | 검색 속도를 향상시키기 위해 사용 |
| 동의어 | 객체에 또 다른 이름을 부여한다. |

## 1.1. 뷰

- **미리 `SELECT 쿼리`를 저장함**으로서 복잡한 쿼리를 **단순화**할 수 있다.
- 데이터 **액세스를 제한할 수 있다.**
- **데이터 독립성**을 제공한다.
- 동일한 데이터의 다른 뷰를 제공한다.

```sql
-- VIEW 객체 생성
CREATE VIEW V_TACCT
AS
SELECT lnact, lnact_seq, acct_typ, lnid, ln_dt, ln_term, exp_dt, ln_amt
  FROM tacct 
 WHERE lmt_typ IS NULL 
   AND lnid IN (SELECT lnid 
                  FROM tcredit 
                 WHERE acode = '04' 
                   AND end_dt > SYSDATE 
                   AND code IN (SELECT code 
                                  FROM tcode 
                                 WHERE grade_desc = '신용상태 우수'))
ORDER BY lnact, lnact_seq ;

-- VIEW 객체 조회
SELECT * 
  FROM V_TACCT;
```

### 1.1.1. VIEW 수정

```sql
-- VIEW 수정
CREATE OR REPLACE VIEW vid
AS 
SELECT lnid, id_typ, bthday, gender, score
  FROM tid
 WHERE id_typ = '1' ;

-- 수정 확인
SELECT *
  FROM vid ;
```

### 1.1.2. VIEW 삭제

```sql
DROP VIEW vid ;
```

## 1.2. INDEX

- 오라클 서버에서 **포인터**를 사용하여 **행 검색속도를 높이는 데 사용**할 수 있다.
- **신속한 경로 액세스 방식을 사용**하여 데이터를 빠르게 찾아 입출력을 줄일 수 있다.
- 인덱스의 대상인 **테이블에 종속적**이다.
- **오라클 서버에서** 자동으로 사용되고 **관리**된다.
- 책에서 **색인(또는 목차)페이지**를 만든다고 보면 됨.

### 1.2.1. INDEX 생성

```sql
CREATE INDEX 인덱스명
ON 테이블명 (컬럼명1, 컬럼명2 ... ) ;
```

## 1.3. SEQUENCE

```sql
CREATE SEQUENCE lnid_sq
START WITH 30000
MAXVALUE 99999 ;
```

### 1.3.1. 시퀀스명.NEXTVAL

- NEXTVAL은 사용 가능한 다음 시퀀스 값을 반환한다.

```sql
INSERT INTO EMP2(EMPNO, ENAME, SAL, DEPTNO)
VALUES (EMPNO_SQ.NEXTVAL, 'KEON', 9999, 10);
```

## 1.4. SYNONYM - 동의어

- **바로가기** 역할.
- **다른 유저의 테이블**을 호출할 때 **네이밍을 지정**하는 것.

```sql
SYSTEM> CREATE SYNONYM EMP FOR TEST.EMP ;

SYSTEM> SELECT * 
          FROM EMP ;
```
